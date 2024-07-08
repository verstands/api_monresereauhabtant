import { Module } from '@nestjs/common';
import { CapamgneService } from './capamgne.service';
import { CapamgneController } from './capamgne.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CapamgneService, PrismaService],
  controllers: [CapamgneController]
})
export class CapamgneModule {}
