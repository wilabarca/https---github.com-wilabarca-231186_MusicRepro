
import { LinkedList } from '../Models/LinkedList.js';


export class MusicPlayerModel {
    constructor(songs) {
        this.playlist = new LinkedList();
        songs.forEach(song => this.playlist.push(song));
        this.currentNode = this.playlist.getCurrentNode();
    }
    

    getCurrentSong() {
        return this.currentNode ? this.currentNode.getData() : null;
    }

    nextSong() {
        this.currentNode = this.playlist.nextNode();
        return this.getCurrentSong();
    }

    prevSong() {
        this.currentNode = this.playlist.prevNode();
        return this.getCurrentSong();
    }
}
