import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CommentaireService } from './commentaire.service';
import { CommentaireDto } from 'src/dto/commentaire.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('commentaire')
export class CommentaireController {
    constructor(private readonly roleservice : CommentaireService) {}

    @Get(':id_user/:id_pospect')
    get(@Param('id_user') id_user: string, @Param('id_pospect') id_pospect: string) {
      return this.roleservice.get({ id_user, id_pospect });
    }
    @Get(':id')
    getApplication(@Param('id') id: string) {
      return this.roleservice.getId({ 
        id,
      });
    }
    
    @Put(':id')
    updateagenda(@Param('id') id: string, @Body() agentUpdate: CommentaireDto) {
      return this.roleservice.update({ id, ...agentUpdate });
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }

    @Post()
    async createAgenda(@Body() agendadto: CommentaireDto) {
      return await this.roleservice.create(agendadto);
    }
}
