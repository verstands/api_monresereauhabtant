import { Module } from '@nestjs/common';
import { WorkflowService } from './workflow.service';
import { WorkflowController } from './workflow.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [WorkflowService, PrismaService],
  controllers: [WorkflowController]
})
export class WorkflowModule {}
