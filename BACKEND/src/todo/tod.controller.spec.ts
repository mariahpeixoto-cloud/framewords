import { Test, TestingModule } from '@nestjs/testing';
import { TodController } from './tod.controller';
import { TodService } from './tod.service';

describe('TodController', () => {
  let controller: TodController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodController],
      providers: [TodService],
    }).compile();

    controller = module.get<TodController>(TodController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
