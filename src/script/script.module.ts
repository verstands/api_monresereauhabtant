import { Module } from '@nestjs/common';
import { ScriptService } from './script.service';
import { ScriptController } from './script.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ScriptService, PrismaService],
  controllers: [ScriptController]
})
export class ScriptModule {}