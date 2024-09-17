import { Test, TestingModule } from '@nestjs/testing';
import { CategorieworkflowService } from './categorieworkflow.service';

describe('CategorieworkflowService', () => {
  let service: CategorieworkflowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CategorieworkflowService],
    }).compile();

    service = module.get<CategorieworkflowService>(CategorieworkflowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
