import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { UpdateTodoRepository } from "../repository/update-todos.repository";
import { UpdateTodoDto } from "../dto/update-todos.dto";


@Injectable()
export class updateTodoUseCase {
    update(id: string, updateTodoDto: UpdateTodoDto) {
      throw new Error('Method not implemented.');
    }
    constructor(
        private readonly updateTodoRepository: UpdateTodoRepository,
        private readonly logger: Logger

    ) { }

    async execute(data: UpdateTodoDto, id: string) {
        try {
            this.logger.log('Updating toDo...');
            const todo = await this.updateTodoRepository.execute(data, id);

            if (!todo) {
                throw new NotFoundException('ToDo not found');
            }
            await this.updateTodoRepository.update(data, id);


            this.logger.log('ToDo updated sucessfully');
            return todo;
        } catch (error) {
            this.logger.error(error);
            throw new Error('Failed to update toDo');
        }
    }
}
