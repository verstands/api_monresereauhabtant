import { Test, TestingModule } from '@nestjs/testing';
import { PiecejointService } from './piecejoint.service';

describe('PiecejointService', () => {
  let service: PiecejointService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PiecejointService],
    }).compile();

    service = module.get<PiecejointService>(PiecejointService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
