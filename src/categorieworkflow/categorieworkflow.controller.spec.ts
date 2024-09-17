import { Test, TestingModule } from '@nestjs/testing';
import { CategorieworkflowController } from './categorieworkflow.controller';

describe('CategorieworkflowController', () => {
  let controller: CategorieworkflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategorieworkflowController],
    }).compile();

    controller = module.get<CategorieworkflowController>(CategorieworkflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
