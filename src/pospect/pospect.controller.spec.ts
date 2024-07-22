import { Test, TestingModule } from '@nestjs/testing';
import { PospectController } from './pospect.controller';

describe('PospectController', () => {
  let controller: PospectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PospectController],
    }).compile();

    controller = module.get<PospectController>(PospectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
