import { Injectable } from '@nestjs/common';
import { NotificationDto } from 'src/dto/notification.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class NotificationService {
  constructor(private readonly prismaservice: PrismaService) {}

  async create(dataN: NotificationDto) {
    const createdNotification = await this.prismaservice.notifications.create({
      data: {
        ...dataN,
        createdAt: dataN.createdAt,
      },
    });
    return createdNotification;
  }

  async getNotifications() {
    return await this.prismaservice.notifications.findMany();
  }

  async getNotificationById(id: string) {
    return await this.prismaservice.notifications.findUnique({
      where: { id },
    });
  }

  async deleteNotification(id: string) {
    return await this.prismaservice.notifications.delete({
      where: { id },
    });
  }
}
