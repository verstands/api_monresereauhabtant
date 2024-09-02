import { Module } from '@nestjs/common';
import { HistoriqueafficheService } from './historiqueaffiche.service';
import { HistoriqueafficheController } from './historiqueaffiche.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [HistoriqueafficheService, PrismaService],
  controllers: [HistoriqueafficheController]
})
export class HistoriqueafficheModule {}
