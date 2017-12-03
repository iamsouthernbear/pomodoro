import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../../shared/shared';
import { CanActivate, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})

export class TaskEditorComponent implements OnInit {
  task: Task;

  constructor(private _taskService: TaskService,
              private _router: Router,
              private _title: Title) {
    this.task = <Task>{};
  }

  ngOnInit() {
  }

  public saveTask(): void {
    this.task.deadline = new Date(this.task.deadline.toString());
    this._taskService.addTask(this.task);
    this._router.navigate(['/tasks']);
  }

}
