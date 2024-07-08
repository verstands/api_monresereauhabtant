import { Module } from '@nestjs/common';
import { InvaliditeService } from './invalidite.service';
import { InvaliditeController } from './invalidite.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [InvaliditeService, PrismaService],
  controllers: [InvaliditeController]
})
export class InvaliditeModule {}
