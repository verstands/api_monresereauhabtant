import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [NotificationService, PrismaService],
  controllers: [NotificationController]
})
export class NotificationModule {}
