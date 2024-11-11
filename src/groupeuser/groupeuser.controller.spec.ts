import { Test, TestingModule } from '@nestjs/testing';
import { GroupeuserController } from './groupeuser.controller';

describe('GroupeuserController', () => {
  let controller: GroupeuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupeuserController],
    }).compile();

    controller = module.get<GroupeuserController>(GroupeuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
