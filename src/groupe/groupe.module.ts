import { Module } from '@nestjs/common';
import { GroupeService } from './groupe.service';
import { GroupeController } from './groupe.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [GroupeService, PrismaService],
  controllers: [GroupeController]
})
export class GroupeModule {}
