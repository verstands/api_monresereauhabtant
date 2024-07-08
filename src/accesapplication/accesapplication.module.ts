import { Module } from '@nestjs/common';
import { AccesapplicationService } from './accesapplication.service';
import { AccesapplicationController } from './accesapplication.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AccesapplicationService, PrismaService],
  controllers: [AccesapplicationController]
})
export class AccesapplicationModule {}
