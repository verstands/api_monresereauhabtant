import { Module } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ModulesService, PrismaService],
  controllers: [ModulesController]
})
export class ModulesModule {}
