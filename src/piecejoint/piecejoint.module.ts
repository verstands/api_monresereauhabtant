import { Module } from '@nestjs/common';
import { PiecejointService } from './piecejoint.service';
import { PiecejointController } from './piecejoint.controller';

@Module({
  providers: [PiecejointService],
  controllers: [PiecejointController]
})
export class PiecejointModule {}
