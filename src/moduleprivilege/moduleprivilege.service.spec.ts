import { Test, TestingModule } from '@nestjs/testing';
import { ModuleprivilegeService } from './moduleprivilege.service';

describe('ModuleprivilegeService', () => {
  let service: ModuleprivilegeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ModuleprivilegeService],
    }).compile();

    service = module.get<ModuleprivilegeService>(ModuleprivilegeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
