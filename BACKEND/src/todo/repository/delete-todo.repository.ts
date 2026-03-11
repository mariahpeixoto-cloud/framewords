import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateTodoDto } from "../dto/update-tod.dto";


@Injectable()
export class deleteTodoRepository {
    constructor(private readonly prisma: PrismaService) { }

    async execute (id: string) {
        return await this.prisma.todo.delete({ where: { id } });
    }
}
