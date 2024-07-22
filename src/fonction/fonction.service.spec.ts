import { Test, TestingModule } from '@nestjs/testing';
import { FonctionService } from './fonction.service';

describe('FonctionService', () => {
  let service: FonctionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FonctionService],
    }).compile();

    service = module.get<FonctionService>(FonctionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
