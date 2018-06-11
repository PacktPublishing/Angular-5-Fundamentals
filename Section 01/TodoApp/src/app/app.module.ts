import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimerComponent } from './timer.component';
import { CountdownTimerComponent } from './countdown.timer.component';


@NgModule({
  declarations: [
    AppComponent, TimerComponent,CountdownTimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
