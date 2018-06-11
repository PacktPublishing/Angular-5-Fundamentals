import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router' ;

import { TasksComponent } from './tasks/tasks.component';
import { TimerComponent } from './timer/timer.component';
import { TaskEditorComponent } from './tasks/task.editor.component';
import { routes } from './routes';
import { TaskDetailComponent } from './tasks/task.detail.component';


@NgModule({
  declarations: [
    AppComponent,TasksComponent,TimerComponent,TaskEditorComponent, TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
