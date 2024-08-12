import { Module } from '@nestjs/common';
import { ModelmailService } from './modelmail.service';
import { ModelmailController } from './modelmail.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ModelmailService, PrismaService],
  controllers: [ModelmailController]
})
export class ModelmailModule {}
