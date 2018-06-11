import { Component } from '@angular/core';
import { Playlist } from './playlist.service';

import { TopHitsPlaylist } from './top-hits/playlist';


@Component({
	selector: 'music-charts',
	template: '<music-player></music-player>',
	viewProviders: [ { provide : Playlist, useClass : TopHitsPlaylist }]
})
export class MusicChartsComponent {}