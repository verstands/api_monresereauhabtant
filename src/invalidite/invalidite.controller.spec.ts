import { Test, TestingModule } from '@nestjs/testing';
import { InvaliditeController } from './invalidite.controller';

describe('InvaliditeController', () => {
  let controller: InvaliditeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvaliditeController],
    }).compile();

    controller = module.get<InvaliditeController>(InvaliditeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
