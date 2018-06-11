import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common' ;
import localeSV from '@angular/common/locales/sv';
import { JsonDemoComponent } from './json-demo.component';
import { i18DemoComponent } from './i18.demo.component';

registerLocaleData(localeSV);

@NgModule({
  declarations: [
    AppComponent, JsonDemoComponent, i18DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
