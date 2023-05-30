import { Test, TestingModule } from '@nestjs/testing';
import { CardTrackController } from './card-track.controller';

describe('CardTrackController', () => {
  let controller: CardTrackController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CardTrackController],
    }).compile();

    controller = module.get<CardTrackController>(CardTrackController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
