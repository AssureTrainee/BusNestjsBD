import { Test, TestingModule } from '@nestjs/testing';
import { DetailStagePointController } from './detail-stage-point.controller';

describe('DetailStagePointController', () => {
  let controller: DetailStagePointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DetailStagePointController],
    }).compile();

    controller = module.get<DetailStagePointController>(DetailStagePointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
