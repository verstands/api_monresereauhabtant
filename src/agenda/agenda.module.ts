import { Module } from '@nestjs/common';
import { AgendaController } from './agenda.controller';
import { AgendaService } from './agenda.service';
import { PrismaService } from 'src/prisma.service';
import { NotificationGateway } from 'src/notification/notification.gateway';
import { NotificationService } from 'src/notification/notification.service';

@Module({
  controllers: [AgendaController],
  providers: [AgendaService, PrismaService, NotificationGateway, NotificationService]
})
export class AgendaModule {}
