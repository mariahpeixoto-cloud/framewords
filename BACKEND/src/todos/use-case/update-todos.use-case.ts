import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { UpdateTodoRepository } from "../repository/update-todos.repository";
import { UpdateTodoDto } from "../dto/update-todos.dto";


@Injectable()
export class updateTodoUseCase {

    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly logger: Logger

    ) { }

    async update(id: string, data: UpdateTodoDto) {
        try {
            this.logger.log('Updating toDo...');
            const todo = await this.updateTodoRepository.update(id, data);

            if (!todo) {
                throw new NotFoundException('ToDo not found');
            }
            await this.updateTodoRepository.update(id, data);


            this.logger.log('ToDo updated sucessfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to update toDo');
        }
    }
}
