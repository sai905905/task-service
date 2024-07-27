import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @MessagePattern({ cmd: 'createTask' })
  create(createTaskDto: any) {
    return this.tasksService.create(createTaskDto);
  }

  @MessagePattern({ cmd: 'findAllTasks' })
  findAll() {
    return this.tasksService.findAll();
  }

  @MessagePattern({ cmd: 'findOneTask' })
  findOne(id: string) {
    return this.tasksService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateTask' })
  update(data: { id: string; updateTaskDto: any }) {
    return this.tasksService.update(data.id, data.updateTaskDto);
  }

  @MessagePattern({ cmd: 'deleteTask' })
  delete(id: string) {
    return this.tasksService.delete(id);
  }
}
