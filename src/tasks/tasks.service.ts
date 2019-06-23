import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  // get getAllTasks(): Task[] {
  //   return this.tasks;
  // }
  // getTasks(filterDto: GetTasksFilterDto): Task[] {
  //   const { status, searchTerm } = filterDto;
  //   let tasks = this.getAllTasks;
  //   if (status) {
  //     tasks = tasks.filter(task => task.status === status);
  //   }
  //   if (searchTerm) {
  //     tasks = tasks.filter(
  //       task =>
  //         task.id.includes(searchTerm) || task.description.includes(searchTerm),
  //     );
  //   }
  //   return tasks;
  // }
  // getTaskById(id: string): Task {
  //   const found = this.tasks.find(task => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with ${id} is not found`);
  //   }
  //   return found;
  // }
  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }
  // deleteTask(id: string): void {
  //   const found = this.getTaskById(id);
  //   this.tasks = this.tasks.filter(task => task.id !== found.id);
  // }
}
