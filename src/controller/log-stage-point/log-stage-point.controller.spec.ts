import { Test, TestingModule } from '@nestjs/testing';
import { LogStagePointController } from './log-stage-point.controller';

describe('LogStagePointController', () => {
  let controller: LogStagePointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogStagePointController],
    }).compile();

    controller = module.get<LogStagePointController>(LogStagePointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
