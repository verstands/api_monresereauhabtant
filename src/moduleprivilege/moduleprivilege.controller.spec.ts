import { Test, TestingModule } from '@nestjs/testing';
import { ModuleprivilegeController } from './moduleprivilege.controller';

describe('ModuleprivilegeController', () => {
  let controller: ModuleprivilegeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ModuleprivilegeController],
    }).compile();

    controller = module.get<ModuleprivilegeController>(ModuleprivilegeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
