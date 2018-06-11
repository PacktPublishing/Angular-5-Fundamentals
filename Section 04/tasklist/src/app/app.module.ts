import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TaskComponent } from './tasks';


@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports : [ TaskComponent ],
  bootstrap: [TaskComponent]
})
export class AppModule { }
