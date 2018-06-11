import { Component } from '@angular/core';

@Component({
	selector: 'timer',
  templateUrl:'./timer.component.html',
  styleUrls : ['./timer.component.css'],
  styles : [`
		p {
			text-align: center;
		}
		table {
			margin: auto;
		}
	`]
})
export class TimerComponent {
  timeout: number;
  onCountdownCompleted(): void {
    alert('Time up !')
  }
}