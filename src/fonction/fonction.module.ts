import { Module } from '@nestjs/common';
import { FonctionService } from './fonction.service';
import { FonctionController } from './fonction.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [FonctionService, PrismaService],
  controllers: [FonctionController]
})
export class FonctionModule {}
