import * as uuid from 'uuid/v1';

import { Task, TaskStatus } from './task.model';

import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  get getAllTasks(): Task[] {
    return this.tasks;
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }
}
