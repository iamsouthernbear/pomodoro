import { Queueable } from './queueable';

export interface Task extends Queueable {
  name: string;
  deadline: Date;
  pomodorosRequired: number;
}
