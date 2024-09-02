import { Module } from '@nestjs/common';
import { FonctionmenuService } from './fonctionmenu.service';
import { FonctionmenuController } from './fonctionmenu.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [FonctionmenuService, PrismaService],
  controllers: [FonctionmenuController]
})
export class FonctionmenuModule {}
