import { Module } from '@nestjs/common';
import { ModuleprivilegeService } from './moduleprivilege.service';
import { ModuleprivilegeController } from './moduleprivilege.controller';

@Module({
  providers: [ModuleprivilegeService],
  controllers: [ModuleprivilegeController]
})
export class ModuleprivilegeModule {}
