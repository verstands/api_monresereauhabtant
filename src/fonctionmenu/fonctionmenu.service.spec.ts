import { Test, TestingModule } from '@nestjs/testing';
import { FonctionmenuService } from './fonctionmenu.service';

describe('FonctionmenuService', () => {
  let service: FonctionmenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FonctionmenuService],
    }).compile();

    service = module.get<FonctionmenuService>(FonctionmenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
