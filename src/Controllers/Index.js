import { MusicPlayerModel } from '../Models/MusicPlayerModel.js';
import { MusicPlayerView } from '../Models/MusicPlayerView.js';

const songs = ['going-up', 'inspiring-ambient', 'technology', 'No Hay Mal Que Dure', 'Zoé - Luna (MTV Unplugged)', 'Bruno Mars - Locked Out Of Heaven (Official Music Video)'];
const musicPlayerModel = new MusicPlayerModel(songs);
const musicPlayerView = new MusicPlayerView(musicPlayerModel);

