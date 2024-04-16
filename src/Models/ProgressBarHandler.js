
export class ProgressBarHandler {
  constructor(audioElement) {
    this.audioElement = audioElement;
    this.progressContainer = document.createElement('div');
    this.progressContainer.className = 'progress_container';

    this.progressElement = document.createElement('div');
    this.progressElement.id = 'progress';
    this.progressContainer.appendChild(this.progressElement);

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.progressContainer.addEventListener('click', (event) => this.handleProgressClick(event));
    this.audioElement.addEventListener('timeupdate', () => this.updateProgressBar());
  }

  updateProgressBar() {
    const { currentTime, duration } = this.audioElement;
    const progressPercent = (currentTime / duration) * 100;
    this.progressElement.style.width = `${progressPercent}%`;
  }

  handleProgressClick(event) {
    const { offsetX, target } = event;
    const width = target.clientWidth;
    const duration = this.audioElement.duration;
    const seekTime = (offsetX / width) * duration;

    this.audioElement.currentTime = seekTime;
  }

  setProgressClickHandler(handler) {
    this.progressContainer.addEventListener('click', handler);
  }

  calculateSeekTime(event) {
    const { offsetX, target } = event;
    const width = target.clientWidth;
    const duration = this.audioElement.duration;
    return (offsetX / width) * duration;
  }

  getProgressContainer() {
    return this.progressContainer;
  }
}

