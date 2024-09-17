import { Test, TestingModule } from '@nestjs/testing';
import { EtapeworkflowController } from './etapeworkflow.controller';

describe('EtapeworkflowController', () => {
  let controller: EtapeworkflowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EtapeworkflowController],
    }).compile();

    controller = module.get<EtapeworkflowController>(EtapeworkflowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
