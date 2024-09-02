import { Test, TestingModule } from '@nestjs/testing';
import { InvaliditeService } from './invalidite.service';

describe('InvaliditeService', () => {
  let service: InvaliditeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvaliditeService],
    }).compile();

    service = module.get<InvaliditeService>(InvaliditeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
