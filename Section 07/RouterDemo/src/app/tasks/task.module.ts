import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { TasksComponent } from './tasks.component';
import { TaskEditorComponent } from './task.editor.component';

import { BrowserModule } from '@angular/platform-browser';
import { routes } from "./routes";
import { TaskDetailComponent } from "./task.detail.component";


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    BrowserModule
  ],
  declarations: [
    TasksComponent,
    TaskEditorComponent,
    TaskDetailComponent
  ],
  exports: [
    TasksComponent,
    TaskEditorComponent,
  ],
  providers: []
})
export class TaskModule { }
