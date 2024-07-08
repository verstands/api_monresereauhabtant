import { Module } from '@nestjs/common';
import { TypeproduitController } from './typeproduit.controller';
import { TypeproduitService } from './typeproduit.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TypeproduitController],
  providers: [TypeproduitService, PrismaService]
})
export class TypeproduitModule {}
