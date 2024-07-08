import { Module } from '@nestjs/common';
import { VilleService } from './ville.service';
import { VilleController } from './ville.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [VilleService, PrismaService],
  controllers: [VilleController]
})
export class VilleModule {}
