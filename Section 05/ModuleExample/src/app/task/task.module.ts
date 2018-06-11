import { NgModule } from '@angular/core' ;
import { TaskDetailsComponent } from './task-details.component' ;
import { TaskComponent } from './task.component' ;

@NgModule({
declarations:  [ TaskComponent, TaskDetailsComponent],
exports:  [ TaskComponent, TaskDetailsComponent]
})
export class TaskModule { }
