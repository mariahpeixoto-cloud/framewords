import { Injectable, Logger } from "@nestjs/common";
import { FindTodoByIdRepository } from "../repository/find-todos-by-id.repository";

@Injectable()
export class FindTodobyIdUseCase{
    constructor(
        private readonly findTodoByIdRepository: FindTodoByIdRepository,
        private readonly logger: Logger

    ){}

    async findById (id: string ) {
        try {
            this.logger.log('Finding toDo by ID...');
            const todo = await this.findTodoByIdRepository.findById(id);
            this.logger.log('ToDo found sucessfully');
            return todo;
        }catch (error) {
                this.logger.error(error);
                throw new Error ('Failed to find toDo');
            }
        }
        
    }
