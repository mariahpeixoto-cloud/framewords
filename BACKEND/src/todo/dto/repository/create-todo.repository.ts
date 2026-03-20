import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateTodoDto } from "../create-tod.dto";

@Injectable()
export class CreateTodoRepository {
    constructor(private readonly prisma: PrismaService) { }

    async execute(data: CreateTodoDto) {
        return await this.prisma.todo.create({ data });
    }
}