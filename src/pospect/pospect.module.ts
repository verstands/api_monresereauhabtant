import { Module } from '@nestjs/common';
import { PospectService } from './pospect.service';
import { PospectController } from './pospect.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PospectService, PrismaService],
  controllers: [PospectController]
})
export class PospectModule {}
