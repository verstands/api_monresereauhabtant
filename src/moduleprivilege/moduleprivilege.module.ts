import { Module } from '@nestjs/common';
import { ModuleprivilegeService } from './moduleprivilege.service';
import { ModuleprivilegeController } from './moduleprivilege.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [ModuleprivilegeService, PrismaService],
  controllers: [ModuleprivilegeController]
})
export class ModuleprivilegeModule {}
