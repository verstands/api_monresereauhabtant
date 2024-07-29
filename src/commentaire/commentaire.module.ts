import { Module } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CommentaireController } from './commentaire.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [CommentaireService, PrismaService],
  controllers: [CommentaireController]
})
export class CommentaireModule {}
