import { TasksComponent } from "./tasks/tasks.component";
import { TaskEditorComponent } from "./tasks/task.editor.component";
import { TimerComponent } from "./timer/timer.component";

export const routes = [{
    path: 'tasks',
    name: 'TasksComponent',
    component: TasksComponent
}, {
    path: 'tasks/editor',
    name: 'TaskEditorComponent',
    component: TaskEditorComponent
}, {
    path: 'timer',
    name: 'TimerComponent',
    component: TimerComponent
}
]