import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskRepository } from './task.repository';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}
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
  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Task with id ${id} is not found`);
    }
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }

  async deleteTask(id: number): Promise<object> {
    const result = await this.taskRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} was not found`);
    } else {
      return {
        statusCode: 200,
        message: `Task with id ${id} deleted successfully`,
      };
    }
  }
}
