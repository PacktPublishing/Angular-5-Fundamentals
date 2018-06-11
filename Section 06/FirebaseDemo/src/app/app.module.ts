import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2' ;
import { AngularFireDatabaseModule } from 'angularfire2/database' ;
import {  AngularFireAuthModule, AngularFireAuth }  from 'angularfire2/auth' ;

export const environment = {
  firebase:
  {
    apiKey: "AIzaSyCNw9cDTFjYh7HpzzXzxQYBDWPbTSh41eY",
    authDomain: "book1-6dc77.firebaseapp.com",
    databaseURL: "https://book1-6dc77.firebaseio.com",
    projectId: "book1-6dc77",
    storageBucket: "book1-6dc77.appspot.com",
    messagingSenderId: "671034060277"
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
