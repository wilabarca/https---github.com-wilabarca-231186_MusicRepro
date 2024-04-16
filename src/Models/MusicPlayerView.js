
import { ProgressBarHandler } from './ProgressBarHandler.js';
import { ButtonFactory } from './ButtonFactory.js';

export class MusicPlayerView {
  constructor(model) {
    this.model = model;

    this.audioElement = document.createElement('audio');
    this.audioElement.id = 'audio';

    this.titleElement = document.createElement('h1');
    this.titleElement.id = 'title';

    this.controlsContainer = document.createElement('div');
    this.controlsContainer.className = 'controls';

    this.prevButton = ButtonFactory.createButton('prev', 'fas fa-backward');
    this.playButton = ButtonFactory.createButton('play', 'fas fa-play');
    this.nextButton = ButtonFactory.createButton('next', 'fas fa-forward');

    this.progressBarHandler = new ProgressBarHandler(this.audioElement);

    this.setupUI();
    this.setupEventListeners();

    this.loadSong(this.model.getCurrentSong());
  }

  setupUI() {
    const appElement = document.getElementById('app');
    appElement.appendChild(this.audioElement);
    appElement.appendChild(this.titleElement);
    appElement.appendChild(this.controlsContainer);
    appElement.appendChild(this.progressBarHandler.getProgressContainer());

    this.controlsContainer.appendChild(this.prevButton);
    this.controlsContainer.appendChild(this.playButton);
    this.controlsContainer.appendChild(this.nextButton);
  }

  setupEventListeners() {
    this.playButton.addEventListener('click', () => this.togglePlay());
    this.prevButton.addEventListener('click', () => this.prevSong());
    this.nextButton.addEventListener('click', () => this.nextSong());
    this.progressBarHandler.setProgressClickHandler((event) => this.handleProgressClick(event));
    this.audioElement.addEventListener('timeupdate', () => this.updateProgressBar());
  }

  handleProgressClick(event) {
    const seekTime = this.progressBarHandler.calculateSeekTime(event);
    this.audioElement.currentTime = seekTime;
  }

  updateProgressBar() {
    this.progressBarHandler.updateProgressBar();
  }

  loadSong(song) {
    this.audioElement.src = `./src/Audio/${song}.mp3`;
    this.titleElement.textContent = song;
    this.audioElement.load();
    this.audioElement.play();
  }

  togglePlay() {
    if (this.audioElement.paused) {
      this.audioElement.play();
      this.playButton.querySelector('i').className = 'fas fa-pause';
    } else {
      this.audioElement.pause();
      this.playButton.querySelector('i').className = 'fas fa-play';
    }
  }

  prevSong() {
    const song = this.model.prevSong();
    this.loadSong(song);
  }

  nextSong() {
    const song = this.model.nextSong();
    this.loadSong(song);
  }
}
