import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { HistoriqueafficheService } from './historiqueaffiche.service';
import { HistoriqueAffiche } from 'src/dto/HistoriqueAffiche';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('historiqueaffiche')
export class HistoriqueafficheController {
    constructor(private readonly roleservice : HistoriqueafficheService) {}

    @Get(':prospect/:user')
    get(
      @Param('prospect') prospect: string, 
      @Param('user') user: string
    ) {
      return this.roleservice.get({ prospect, user });
    }
  
    @Get(':id')
    getApplication(@Param('id') id: string) {
      return this.roleservice.getId({
        id,
      });
    }
   
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: HistoriqueAffiche) {
      return await this.roleservice.create(agendadto);
    }
}
