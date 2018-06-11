import {  Component, Input, Pipe, PipeTransform, Directive, OnInit, HostListener } from '@angular/core';

/// Model interface
interface Task {
	name: string;
	deadline: Date;
	queued: boolean;
	hoursLeft: number;
}

// Local Data Service
class TaskService {
	public taskStore: Array<Task> = [];
	constructor() {
		const tasks = [
			{
				name : 'Code and HTML table',
				deadline : 'Jun 23 2015',
				hoursLeft : 1
			},
			{
			name : 'Sketch a wireframe for the new homepage',
			deadline : 'Jun 24 2016',
			hoursLeft : 2
			},
			{
			name : 'Style table with bootstrap styles',
			deadline : 'Jun 25 2016',
			hoursLeft : 1
			}
		];
		this.taskStore = tasks.map( task => {
			return {
				name : task.name,
				deadline : new Date(task.deadline),
				queued : false,
				hoursLeft : task.hoursLeft
			};
		})
	}
}

@Component({
	selector : 'tasks',
	styleUrls : ['./tasks.css'],
	templateUrl : './tasks.html'
})
export class TaskComponent {
	today: Date;
    tasks: Task[];
    queuedTasks: number;
    queuedHeaderMapping: any = {
        '=0': 'No tasks',
        '=1': 'One task',
        'other' : '# tasks'
    };
	constructor() {
		const TasksService: TaskService = new TaskService();
		this.tasks = TasksService.taskStore;
        this.today = new Date();
        this.updateQueuedTasks();
    }
    toggleTask(task: Task): void {
        task.queued = !task.queued;
        this.updateQueuedTasks();
    }

    private updateQueuedTasks() {
        this.queuedTasks = this.tasks
            .filter( Task => Task.queued )
            .reduce((hoursLeft: number, queuedTask: Task) => {
                return hoursLeft + queuedTask.hoursLeft;
        }, 0)
    }
}