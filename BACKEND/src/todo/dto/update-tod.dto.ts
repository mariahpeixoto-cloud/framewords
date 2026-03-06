import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-tod.dto';


export class UpdateTodoDto extends PartialType( CreateTodoDto) {}




