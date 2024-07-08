import { Module } from '@nestjs/common';
import { TyperevenuService } from './typerevenu.service';
import { TyperevenuController } from './typerevenu.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [TyperevenuService, PrismaService],
  controllers: [TyperevenuController]
})
export class TyperevenuModule {}
