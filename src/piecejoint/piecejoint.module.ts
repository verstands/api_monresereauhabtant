import { Module } from '@nestjs/common';
import { PiecejointService } from './piecejoint.service';
import { PiecejointController } from './piecejoint.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [PiecejointService, PrismaService],
  controllers: [PiecejointController]
})
export class PiecejointModule {}
