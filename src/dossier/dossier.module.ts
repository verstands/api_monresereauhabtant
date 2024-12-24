import { Module } from '@nestjs/common';
import { DossierService } from './dossier.service';
import { DossierController } from './dossier.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [DossierService, PrismaService],
  controllers: [DossierController]
})
export class DossierModule {}  
