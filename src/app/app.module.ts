import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PomodoroTimerComponent } from './components/pomodoro-timer/pomodoro-timer.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { PomodoroTasksComponent } from './components/pomodoro-tasks/pomodoro-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PomodoroIconsComponent } from './components/pomodoro-icons/pomodoro-icons.component';

import { TaskService } from './services/task.service';
import { SettingsService } from './services/settings.service';

import { FormattedTimePipe } from './pipes/formatted-time.pipe';
import { QueuedOnlyPipe } from './pipes/queued-only.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PomodoroTimerComponent,
    CountdownComponent,
    PomodoroTasksComponent,
    TasksComponent,
    PomodoroIconsComponent,
    FormattedTimePipe,
    QueuedOnlyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TaskService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
