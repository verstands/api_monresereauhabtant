import { Module } from '@nestjs/common';
import { CategorieworkflowService } from './categorieworkflow.service';
import { CategorieworkflowController } from './categorieworkflow.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CategorieworkflowService, PrismaService],
  controllers: [CategorieworkflowController]
})
export class CategorieworkflowModule {}
