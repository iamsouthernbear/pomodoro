import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';
import { TimerWidgetComponent } from './components/timer-widget/timer-widget.component';
import { LoginComponent } from './components/login/login.component';
import { CanActivateGuard } from './services/can-activate.guard';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'task/editor', component: TaskEditorComponent, canActivate: [CanActivateGuard] },
  { path: 'timer', children: [
      { path: '', component: TimerWidgetComponent },
      { path: ':id', component: TimerWidgetComponent }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
