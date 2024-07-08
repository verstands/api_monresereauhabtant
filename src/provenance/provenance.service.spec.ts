import { Test, TestingModule } from '@nestjs/testing';
import { ProvenanceService } from './provenance.service';

describe('ProvenanceService', () => {
  let service: ProvenanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvenanceService],
    }).compile();

    service = module.get<ProvenanceService>(ProvenanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
