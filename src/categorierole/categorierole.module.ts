import { Module } from '@nestjs/common';
import { CategorieroleService } from './categorierole.service';
import { CategorieroleController } from './categorierole.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CategorieroleService, PrismaService],
  controllers: [CategorieroleController]
})
export class CategorieroleModule {}
