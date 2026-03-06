import { Injectable } from '@nestjs/common';
import { CreateTodDto } from './dto/create-tod.dto';
import { UpdateTodDto } from './dto/update-tod.dto';

@Injectable()
export class TodService {
  create(createTodDto: CreateTodDto) {
    return 'This action adds a new tod';
  }

  findAll() {
    return `This action returns all tod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tod`;
  }

  update(id: number, updateTodDto: UpdateTodDto) {
    return `This action updates a #${id} tod`;
  }

  remove(id: number) {
    return `This action removes a #${id} tod`;
  }
}
