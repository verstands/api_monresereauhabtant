import { Test, TestingModule } from '@nestjs/testing';
import { TypeproduitController } from './typeproduit.controller';

describe('TypeproduitController', () => {
  let controller: TypeproduitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeproduitController],
    }).compile();

    controller = module.get<TypeproduitController>(TypeproduitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
