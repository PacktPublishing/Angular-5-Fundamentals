import { Component } from '@angular/core';
import { Playlist } from './playlist.service';

@Component({
  selector: 'music-library',
  viewProviders : [Playlist],
  template: `<music-player></music-player>`
})
export class MusicLibraryComponent {
}
