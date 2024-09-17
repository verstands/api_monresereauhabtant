import { Module } from '@nestjs/common';
import { EtapeworkflowService } from './etapeworkflow.service';
import { EtapeworkflowController } from './etapeworkflow.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [EtapeworkflowService, PrismaService],
  controllers: [EtapeworkflowController]
})
export class EtapeworkflowModule {}
