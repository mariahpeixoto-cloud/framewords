import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { UpdateTodoDto } from "../update-tod.dto";


@Injectable()
export class UpdateTodoRepository{
    update(data: UpdateTodoDto, id: string) {
        throw new Error("Method not implemented.");
    }
    constructor(private readonly prisma: PrismaService) { }

    async execute (data: UpdateTodoDto, id: string) {
        return await this.prisma.todo.update({ where: { id }, data });
    }
}
