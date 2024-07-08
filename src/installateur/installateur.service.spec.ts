import { Test, TestingModule } from '@nestjs/testing';
import { InstallateurService } from './installateur.service';

describe('InstallateurService', () => {
  let service: InstallateurService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InstallateurService],
    }).compile();

    service = module.get<InstallateurService>(InstallateurService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
