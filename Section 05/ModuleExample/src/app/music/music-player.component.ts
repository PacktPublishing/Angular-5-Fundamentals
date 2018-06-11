import { Component, Host } from '@angular/core' ;
import { Playlist } from './playlist.service' ;

@Component({
	selector: 'music-player' ,
    templateUrl: './music-player.component.html'
})
export class MusicPlayerComponent {
	constructor(@Host() playlist:Playlist) {}
}