import { Component, OnInit } from '@angular/core';
import {
  TaskService,
  SettingsService,
  Task
} from '../../shared/shared';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public today: Date;
  public tasks: Task[];
  public queuedPomodoros: number;
  public queueHeaderMapping: any;
  public timerMinutes: number;

  constructor(private _tasksService: TaskService,
              private _settingService: SettingsService) {

    this.tasks = this._tasksService.taskStore;
    this.today = new Date();
    this.queueHeaderMapping = this._settingService.pluralsMap.tasks;
    this.timerMinutes = this._settingService.timerMinutes;
  }

  ngOnInit() {
    this.updateQueuedPomodoros();
  }

  private updateQueuedPomodoros(): void {
    this.queuedPomodoros = this.tasks
      .filter((task: Task) => task.queued)
      .reduce((pomodoros: number, queuedTask: Task) => {
        return pomodoros + queuedTask.pomodorosRequired;
      }, 0);
  }

  public toggleTask(task: Task): void {
    task.queued = !task.queued;
    this.updateQueuedPomodoros();
  }
}
