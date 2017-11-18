import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  public today: Date;
  public tasks: Task[];
  public queuedPomodoros: number;
  public queueHeaderMapping: any = {
    '=0': 'No pomodoros',
    '=1': 'One pomodoro',
    'other': '# pomodoros'
  };

  constructor(private _tasksService: TaskService) {
    this.tasks = this._tasksService.taskStore;
    this.today = new Date();
    this.updateQueuedPomodoros();
  }

  ngOnInit() {
    // this._tasksService.getTasks();
    // this.tasks = this._tasksService.taskStore;
    // this.today = new Date();
    // this.updateQueuedPomodoros();
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
