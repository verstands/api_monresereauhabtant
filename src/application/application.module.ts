import { Module } from '@nestjs/common';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [ApplicationController],
  providers: [ApplicationService, PrismaService]
})
export class ApplicationModule {}
