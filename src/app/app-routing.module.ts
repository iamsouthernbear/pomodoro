import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';
import { TimerWidgetComponent } from './components/timer-widget/timer-widget.component';

const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksComponent },
  { path: 'task/editor', component: TaskEditorComponent },
  { path: 'timer/:id', component: TimerWidgetComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: false }) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
