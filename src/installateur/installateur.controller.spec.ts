import { Test, TestingModule } from '@nestjs/testing';
import { InstallateurController } from './installateur.controller';

describe('InstallateurController', () => {
  let controller: InstallateurController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InstallateurController],
    }).compile();

    controller = module.get<InstallateurController>(InstallateurController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
