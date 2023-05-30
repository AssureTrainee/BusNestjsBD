import { Test, TestingModule } from '@nestjs/testing';
import { DetailStagePointService } from './detail-stage-point.service';

describe('DetailStagePointService', () => {
  let service: DetailStagePointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DetailStagePointService],
    }).compile();

    service = module.get<DetailStagePointService>(DetailStagePointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
