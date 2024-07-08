import { Module } from '@nestjs/common';
import { ArchivageService } from './archivage.service';
import { ArchivageController } from './archivage.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ArchivageService, PrismaService],
  controllers: [ArchivageController]
})
export class ArchivageModule {}
