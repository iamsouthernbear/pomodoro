import { Component, Directive, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pomodoro-timer',
  templateUrl: './pomodoro-timer.component.html',
  styleUrls: ['./pomodoro-timer.component.css']
})
export class PomodoroTimerComponent implements OnInit {

  public minutes: number;
  public seconds: number;
  private isPaused: boolean;
  public buttonLabel: string;
  public timeout: number;

  constructor() {
    this.resetPomodoro();
    setInterval(() => this.tick(), 1000);
  }

  ngOnInit() {
  }

  private resetPomodoro(): void {
    this.minutes = 24;
    this.seconds = 59;
    this.buttonLabel = 'Start';
    this.togglePaused();
  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabel = 'Pause';

      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetPomodoro();
        }
      }
    }
  }

  public togglePaused(): void {
    this.isPaused = !this.isPaused;
    if (this.minutes < 24 || this.seconds < 59) {
      this.buttonLabel = this.isPaused ? 'Resume' : 'Pause';
    }
  }

  public onCountdownCompleted(): void {
    alert('Time up!');
  }

}
