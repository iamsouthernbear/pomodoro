import { Component } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent  {

  constructor() { }

  public onCountdownCompleted(): void {
    alert('Time up!');
  }

}
