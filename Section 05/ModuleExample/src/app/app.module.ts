import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskModule } from './task/task.module';
import { Playlist } from './music/playlist.service';
import { MusicPlayerComponent } from './music/music-player.component';
import { MusicLibraryComponent } from './music/music-library.component';
import { MusicAppComponent } from './music/music-app.component';
import { GranddadComponent } from './family/granddad.component';
import { FatherComponent } from './family/father.component';
import { ChildComponent } from './family/child.component';
import { MusicChartsComponent } from './music/music-charts.component';

@NgModule({
  declarations: [
    AppComponent,MusicPlayerComponent, MusicLibraryComponent, MusicAppComponent, GranddadComponent,FatherComponent,ChildComponent, MusicChartsComponent
  ],
  providers:[Playlist],
  imports: [
    BrowserModule, TaskModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

