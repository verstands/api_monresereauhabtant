import { Module } from '@nestjs/common';
import { TypechauffageController } from './typechauffage.controller';
import { TypechauffageService } from './typechauffage.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TypechauffageController],
  providers: [TypechauffageService, PrismaService]
})
export class TypechauffageModule {}
