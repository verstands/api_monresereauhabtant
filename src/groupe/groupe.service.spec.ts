import { Test, TestingModule } from '@nestjs/testing';
import { GroupeService } from './groupe.service';

describe('GroupeService', () => {
  let service: GroupeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupeService],
    }).compile();

    service = module.get<GroupeService>(GroupeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
