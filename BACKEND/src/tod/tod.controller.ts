import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TodService } from './tod.service';
import { CreateTodDto } from './dto/create-tod.dto';
import { UpdateTodDto } from './dto/update-tod.dto';

@Controller('tod')
export class TodController {
  constructor(private readonly todService: TodService) {}

  @Post()
  create(@Body() createTodDto: CreateTodDto) {
    return this.todService.create(createTodDto);
  }

  @Get()
  findAll() {
    return this.todService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTodDto: UpdateTodDto) {
    return this.todService.update(+id, updateTodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todService.remove(+id);
  }
}
