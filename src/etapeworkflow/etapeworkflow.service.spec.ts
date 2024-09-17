import { Test, TestingModule } from '@nestjs/testing';
import { EtapeworkflowService } from './etapeworkflow.service';

describe('EtapeworkflowService', () => {
  let service: EtapeworkflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EtapeworkflowService],
    }).compile();

    service = module.get<EtapeworkflowService>(EtapeworkflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
