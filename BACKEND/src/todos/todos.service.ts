import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todos.dto';
import { UpdateTodoDto } from './dto/update-todos.dto';
import { CreateTodoUseCase, DeleteTodoUseCases, FindAllTodoUseCase, FindTodobyIdUseCase,updateTodoUseCase } from './use-case';

@Injectable()
export class TodosService {
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