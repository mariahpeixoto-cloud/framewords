import { Test, TestingModule } from '@nestjs/testing';
import { TodService } from './tod.service';

describe('TodService', () => {
  let service: TodService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodService],
    }).compile();

    service = module.get<TodService>(TodService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
