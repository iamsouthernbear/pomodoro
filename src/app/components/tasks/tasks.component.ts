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

  constructor(private _tasksService: TaskService) { }

  ngOnInit() {
    this._tasksService.getTasks();
    this.tasks = this._tasksService.taskStore;
    this.today = new Date();
  }

  public toggleTask(task: Task): void {
    task.queued = !task.queued;
  }

}
