import { Test, TestingModule } from '@nestjs/testing';
import { PiecejointController } from './piecejoint.controller';

describe('PiecejointController', () => {
  let controller: PiecejointController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PiecejointController],
    }).compile();

    controller = module.get<PiecejointController>(PiecejointController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
