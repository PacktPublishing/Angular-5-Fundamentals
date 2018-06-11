import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Task } from './task.model';

@Component({
  selector: 'tasks',
  template: `
  <div *ngFor="let task of tasks | async">
      {{ task.name }}
      <a [routerLink]="['/tasks/',task.id]">Go to detail</a>
  </div>
  `
})

export class TasksComponent implements OnInit {
  tasks: Task[];
  constructor( private router: Router ) { }
  navigate(task:Task) {
    this.router.navigate(['/tasks',task.id]); // /task/99
  }   

  ngOnInit() {}

}
