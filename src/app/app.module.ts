import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PomodoroTimerComponent } from './components/pomodoro-timer/pomodoro-timer.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { PomodoroTasksComponent } from './components/pomodoro-tasks/pomodoro-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PomodoroIconsComponent } from './components/pomodoro-icons/pomodoro-icons.component';

import { TaskService } from './shared/services/task.service';
import { SettingsService } from './shared/services/settings.service';

import { FormattedTimePipe } from './shared/pipes/formatted-time.pipe';
import { QueuedOnlyPipe } from './shared/pipes/queued-only.pipe';
import { TimerWidgetComponent } from './components/timer-widget/timer-widget.component';
import { TaskTooltipDirective } from './shared/directives/task-tooltip.directive';

@NgModule({
  declarations: [
    AppComponent,
    PomodoroTimerComponent,
    CountdownComponent,
    PomodoroTasksComponent,
    TasksComponent,
    PomodoroIconsComponent,
    FormattedTimePipe,
    QueuedOnlyPipe,
    TimerWidgetComponent,
    TaskTooltipDirective
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
