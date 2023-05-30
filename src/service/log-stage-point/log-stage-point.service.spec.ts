import { Test, TestingModule } from '@nestjs/testing';
import { LogStagePointService } from './log-stage-point.service';

describe('LogStagePointService', () => {
  let service: LogStagePointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogStagePointService],
    }).compile();

    service = module.get<LogStagePointService>(LogStagePointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
