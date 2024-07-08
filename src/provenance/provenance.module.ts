import { Module } from '@nestjs/common';
import { ProvenanceController } from './provenance.controller';
import { ProvenanceService } from './provenance.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ProvenanceController],
  providers: [ProvenanceService, PrismaService]
})
export class ProvenanceModule {}
