import { Test, TestingModule } from '@nestjs/testing';
import { FonctionmenuController } from './fonctionmenu.controller';

describe('FonctionmenuController', () => {
  let controller: FonctionmenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FonctionmenuController],
    }).compile();

    controller = module.get<FonctionmenuController>(FonctionmenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
