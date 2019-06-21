import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks = [];

  get getAllTasks() {
    return this.tasks;
  }
}
