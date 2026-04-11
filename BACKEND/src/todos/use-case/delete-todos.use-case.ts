import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { deleteTodoRepository } from "../repository/delete-todos.repository";




@Injectable()
export class DeleteTodoUseCases {
    delete(id: string) {
      throw new Error('Method not implemented.');
    }
    logger: any;
    deleteTodoRepository: any;
    findTodoByIdRepository: any;

    async execute(id: string) {
        try{
            this.logger.log('Deleting toDo...');

     const todo = await this.findTodoByIdRepository.findById(id);

     if (!todo) {
        throw new NotFoundException('ToDo not found');
     }
     await this.deleteTodoRepository.delete(id);
     this.logger.log('Todo deleted successfully.');
          return todo;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
