import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { NotificationService } from 'src/notification/notification.service';
import { NotificationDto } from 'src/dto/notification.dto';

@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async create(@Body() notificationDto: NotificationDto) {
    return this.notificationService.create(notificationDto);
  }

  @Get()
  async getAll() {
    return this.notificationService.getNotifications();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.notificationService.getNotificationById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.notificationService.deleteNotification(id);
  }
}
