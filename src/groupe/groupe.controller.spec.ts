import { Test, TestingModule } from '@nestjs/testing';
import { GroupeController } from './groupe.controller';

describe('GroupeController', () => {
  let controller: GroupeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupeController],
    }).compile();

    controller = module.get<GroupeController>(GroupeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
