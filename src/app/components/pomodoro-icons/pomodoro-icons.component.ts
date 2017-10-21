import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../../models/task';

@Component({
  selector: 'app-pomodoro-icons',
  templateUrl: './pomodoro-icons.component.html',
  styleUrls: ['./pomodoro-icons.component.css']
})
export class PomodoroIconsComponent implements OnInit {

  @Input() task: Task;
  @Input() size: number;
  public icons = [];

  constructor() { }

  ngOnInit() {
    this.icons.length = this.task.pomodorosRequired;
    this.icons.fill({name: this.task.name});
  }

}
