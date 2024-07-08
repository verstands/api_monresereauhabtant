import { Test, TestingModule } from '@nestjs/testing';
import { TypeproduitService } from './typeproduit.service';

describe('TypeproduitService', () => {
  let service: TypeproduitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeproduitService],
    }).compile();

    service = module.get<TypeproduitService>(TypeproduitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
