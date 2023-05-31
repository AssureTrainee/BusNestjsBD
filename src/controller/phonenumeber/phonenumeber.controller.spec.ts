import { Test, TestingModule } from '@nestjs/testing';
import { PhonenumeberController } from './phonenumeber.controller';

describe('PhonenumeberController', () => {
  let controller: PhonenumeberController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhonenumeberController],
    }).compile();

    controller = module.get<PhonenumeberController>(PhonenumeberController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
