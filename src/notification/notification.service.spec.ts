<<<<<<<< HEAD:src/notification/notification.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationService],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
========
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
>>>>>>>> b618e5f (ddelo):src/pospect/pospect.service.spec.ts
