// Models
import { Queueable } from './models/queueable';
import { Task } from './models/task';

// Services
import { TaskService } from './services/task.service';
import { SettingsService } from './services/settings.service';

// Pipes
import { FormattedTimePipe } from './pipes/formatted-time.pipe';
import { QueuedOnlyPipe } from './pipes/queued-only.pipe';

// Directives
import { TaskTooltipDirective } from './directives/task-tooltip.directive';

const SHARED_PIPES: any[] = [
  FormattedTimePipe,
  QueuedOnlyPipe
];

const SHARED_PROVIDERS: any[] = [
  TaskService,
  SettingsService
];

export {
  // Models
  Queueable,
  Task,

  // Services
  TaskService,
  SettingsService,
  SHARED_PROVIDERS,

  // Pipes
  FormattedTimePipe,
  QueuedOnlyPipe,
  SHARED_PIPES,

  // Directives
  TaskTooltipDirective
};
