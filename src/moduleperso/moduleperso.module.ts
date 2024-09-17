import { Module } from '@nestjs/common';
import { ModulepersoService } from './moduleperso.service';
import { ModulepersoController } from './moduleperso.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ModulepersoService, PrismaService],
  controllers: [ModulepersoController]
})
export class ModulepersoModule {}
