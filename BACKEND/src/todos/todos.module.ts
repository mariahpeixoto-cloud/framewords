import { Logger, Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import * as UseCases from './use-case';
import * as Repositories from './repository';
import { PrismaService } from 'src/shared/databases/prisma.database';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  controllers: [TodosController],
  providers: [...useCases, ...repositories, Logger, PrismaService, TodosService],
})
export class TodosModule {}
