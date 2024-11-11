import { Test, TestingModule } from '@nestjs/testing';
import { GroupeuserService } from './groupeuser.service';

describe('GroupeuserService', () => {
  let service: GroupeuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupeuserService],
    }).compile();

    service = module.get<GroupeuserService>(GroupeuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
