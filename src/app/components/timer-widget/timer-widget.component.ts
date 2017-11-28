import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../shared/shared';
import { TaskService } from '../../shared/services/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-timer-widget',
  templateUrl: './timer-widget.component.html',
  styleUrls: ['./timer-widget.component.css']
})
export class TimerWidgetComponent implements OnInit {
  public minutes: number;
  public seconds: number;
  public buttonLabelKey: string;
  public buttonLabelsMaps: any;
  private isPaused: boolean;
  public taskName: string;

  constructor(private settingService: SettingsService,
              private route: ActivatedRoute,
              private taskService: TaskService) {
    this.buttonLabelsMaps = this.settingService.labelsMap.timer;
  }

  ngOnInit() {
    this.resetPomodoro();
    setInterval(() => this.tick(), 1000);

    this.route.params.subscribe(params => {
      const taskIndex = +params['id'];
      this.taskName = this.taskService.taskStore[taskIndex].name;
    });
  }

  private resetPomodoro(): void {
    this.isPaused = true;
    this.minutes = this.settingService.timerMinutes - 1;
    this.seconds = 59;
    this.buttonLabelKey = 'start';
  }

  private tick(): void {
    if (!this.isPaused) {
      this.buttonLabelKey = 'pause';

      if (--this.seconds < 0) {
        this.seconds = 59;
        if (--this.minutes < 0) {
          this.resetPomodoro();
        }
      }
    }
  }

  public togglePause(): void {
    this.isPaused = !this.isPaused;
    if (this.minutes < this.settingService.timerMinutes || this.seconds < 59) {
      this.buttonLabelKey = this.isPaused ? 'resume' : 'pause';
    }
  }

}
