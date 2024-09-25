<<<<<<<< HEAD:src/fonctionmenu/fonctionmenu.service.spec.ts
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
========
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
>>>>>>>> b618e5f (ddelo):src/fonction/fonction.service.spec.ts
