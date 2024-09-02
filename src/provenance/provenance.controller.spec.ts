import { Test, TestingModule } from '@nestjs/testing';
import { ProvenanceController } from './provenance.controller';

describe('ProvenanceController', () => {
  let controller: ProvenanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProvenanceController],
    }).compile();

    controller = module.get<ProvenanceController>(ProvenanceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
