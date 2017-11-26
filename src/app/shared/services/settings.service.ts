import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
  public timerMinutes: number;
  public labelsMap: any;
  public pluralsMap: any;

  constructor() {
    this.timerMinutes = 25;
    this.labelsMap = {
      'timer': {
        'start': 'Start Timer',
        'pause': 'Pause Timer',
        'resume': 'Resume countdown',
        'other': 'Unknown'
      }
    };
    this.pluralsMap = {
      'tasks': {
        '=0': 'No pomodoros',
        '=1': 'One pomodoro',
        'other': '# pomodoros'
      }
    };
  }

}
