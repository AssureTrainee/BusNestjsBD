import { Test, TestingModule } from '@nestjs/testing';
import { CardTrackService } from './card-track.service';

describe('CardTrackService', () => {
  let service: CardTrackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CardTrackService],
    }).compile();

    service = module.get<CardTrackService>(CardTrackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
