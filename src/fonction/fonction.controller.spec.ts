import { Test, TestingModule } from '@nestjs/testing';
import { FonctionController } from './fonction.controller';

describe('FonctionController', () => {
  let controller: FonctionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FonctionController],
    }).compile();

    controller = module.get<FonctionController>(FonctionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
