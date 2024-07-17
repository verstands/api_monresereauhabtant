import { Module } from '@nestjs/common';
import { AcceroleController } from './accerole.controller';
import { AcceroleService } from './accerole.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AcceroleController],
  providers: [AcceroleService, PrismaService]
})
export class AcceroleModule {}
