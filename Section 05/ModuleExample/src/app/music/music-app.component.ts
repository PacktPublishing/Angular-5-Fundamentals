import { Component } from "@angular/core";
import { Playlist } from "./playlist.service";

@Component({
  selector: 'music-app',
  viewProviders: [Playlist],
  template: '<music-library></music-library>'
})
export class MusicAppComponent { }
