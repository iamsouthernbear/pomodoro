import { Injectable } from '@angular/core';
import { Task } from '../shared';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';

@Injectable()
export class TaskService {

  public taskStore: Task[] = [];
  public taskFeed: Observable<Task>;
  private taskObserver: any;
  private dataUrl = 'assets/raw-tasks.json';

  constructor(private _http: Http) {

    this.taskFeed = new Observable(observer => {
      this.taskObserver = observer;
    });
    this.fetchTasks();
  }

  private fetchTasks(): void {
    this._http.get(this.dataUrl)
      .map(response => response.json())
      .map(stream => stream.map(res => {
        return {
          name: res.name,
          deadline: new Date(res.deadline),
          pomodorosRequired: res.pomodorosRequired,
          queued: res.queued
        };
      }))
      .subscribe(
        tasks => {
          this.taskStore = tasks;
          tasks.forEach(task => this.taskObserver.next(task));
      },
        error => console.log(error));
  }
}
