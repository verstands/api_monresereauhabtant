import { Test, TestingModule } from '@nestjs/testing';
import { PospectService } from './pospect.service';

describe('PospectService', () => {
  let service: PospectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PospectService],
    }).compile();

    service = module.get<PospectService>(PospectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
