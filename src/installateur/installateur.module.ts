import { Module } from '@nestjs/common';
import { InstallateurService } from './installateur.service';
import { InstallateurController } from './installateur.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [InstallateurService, PrismaService],
  controllers: [InstallateurController]
})
export class InstallateurModule {}
