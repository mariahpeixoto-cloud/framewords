import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/databases/prisma.database";
import { CreateTodoDto } from "../dto/create-tod.dto";

@Injectable()
export class FindTodoByIdRepository {
    constructor(private readonly prisma: PrismaService) {}

async findById (id: string ){
   return await this.prisma.todo.findUnique({ where: {id} });
}
}