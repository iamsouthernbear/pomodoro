import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../shared/shared';

@Component({
  selector: 'app-pomodoro-icons',
  templateUrl: './pomodoro-icons.component.html',
  styleUrls: ['./pomodoro-icons.component.css']
})
export class PomodoroIconsComponent implements OnInit {
  @Input() task: Task;
  @Input() size: number;
  public icons: Object[] = [];

  constructor() { }

  ngOnInit() {
    this.icons.length = this.task.pomodorosRequired;
    this.icons.fill({name: this.task.name});
  }

}
