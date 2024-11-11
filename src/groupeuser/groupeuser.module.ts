import { Module } from '@nestjs/common';
import { GroupeuserService } from './groupeuser.service';
import { GroupeuserController } from './groupeuser.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [GroupeuserService, PrismaService],
  controllers: [GroupeuserController]
})
export class GroupeuserModule {}
