import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodoRepository } from "../repository/find-all-todo.repository";


@Injectable()
export class FindAllTodoUseCase{
    constructor(
        private readonly findAllTodoRepository:  FindAllTodoRepository,
        private readonly logger: Logger

    ){}

    async execute() {
        try {
            this.logger.log('Finding all todos...');
            const todos = await this.findAllTodoRepository.execute();
            this.logger.log('Todos found successfully');
            return todos;
        }catch (error) {
                this.logger.error(error);
                throw new Error ('Failed to find all todos');
            }
        }
    }
