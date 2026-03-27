import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-tod.dto';
import { UpdateTodoDto } from './dto/update-tod.dto';
import { CreateTodoUseCase, DeleteTodoUseCases, FindAllTodoUseCase, FindTodobyIdUseCase,updateTodoUseCase } from './dto/use-case';

@Injectable()
export class TodoService {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly findAllTodosUseCase: FindAllTodoUseCase,
    private readonly findTodoByIdUseCase: FindTodobyIdUseCase,
    private readonly updateTodoUseCase: updateTodoUseCase,
    private readonly deleteTodoUseCase: DeleteTodoUseCases
  ) {}

  create(createTodoDto: CreateTodoDto) {
    return this.createTodoUseCase.create(createTodoDto);
  }

  findAll() {
    return this.findAllTodosUseCase.findAll();
  }

  findById(id: string) {
    return this.findTodoByIdUseCase.findById(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.updateTodoUseCase.update(id, updateTodoDto);
  }

  delete(id: string) {
    return this.deleteTodoUseCase.delete(id);
  }
}