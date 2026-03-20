import { Injectable, Logger } from "@nestjs/common";
import { deleteTodoRepository } from "../repository/delete-todo.repository";

@Injectable()
export class deleteTodoUseCase{
    constructor(
        private readonly deleteTodoRepository: deleteTodoRepository ,
        private readonly logger: Logger

    ){}

    async execute( id: string) {
        try {
            this.logger.log('Deleting toDo...');
            const todo = await this.deleteTodoRepository.execute(id);
            this.logger.log('ToDo deleted sucessfully');
            return todo;
        }catch (error) {
                this.logger.error(error);
                throw new Error ('Failed to delete toDo');
            }
        }
    }
