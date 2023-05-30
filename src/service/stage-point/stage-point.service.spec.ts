import { Test, TestingModule } from '@nestjs/testing';
import { StagePointService } from './stage-point.service';

describe('StagePointService', () => {
  let service: StagePointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StagePointService],
    }).compile();

    service = module.get<StagePointService>(StagePointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
