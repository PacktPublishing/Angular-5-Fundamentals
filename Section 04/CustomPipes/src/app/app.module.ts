import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { FormattedTimePipe } from './task';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FormattedTimePipe ], 
  bootstrap:    [ AppComponent ]
})

export class AppModule { }