import { Test, TestingModule } from '@nestjs/testing';
import { StagePointController } from './stage-point.controller';

describe('StagePointController', () => {
  let controller: StagePointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StagePointController],
    }).compile();

    controller = module.get<StagePointController>(StagePointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
