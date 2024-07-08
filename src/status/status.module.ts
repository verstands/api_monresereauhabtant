import { Module } from '@nestjs/common';
import { StatusController } from './status.controller';
import { StatusService } from './status.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [StatusController],
  providers: [StatusService, PrismaService]
})
export class StatusModule {}

