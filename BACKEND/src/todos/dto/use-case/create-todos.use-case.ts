import { Injectable, Logger } from "@nestjs/common";
import { CreateTodoRepository } from "../../repository/create-todos.repository";
import { CreateTodoDto } from "../create-todos.dto";

@Injectable()
export class CreateTodoUseCase{
    create(createTodoDto: CreateTodoDto) {
      throw new Error('Method not implemented.');
    }
    constructor(
        private readonly createTodoRepository:  CreateTodoRepository,
        private readonly logger: Logger

    ){}

    async execute(data: CreateTodoDto) {
        try {
            this.logger.log('Creating toDo...');
            const todo = await this.createTodoRepository.execute(data);
            this.logger.log('ToDo created sucessfully');
            return todo;
        }catch (error) {
                this.logger.error(error);
                throw new Error ('Failed to create toDo');
            }
        }
    }
