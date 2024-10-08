import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { FonctionService } from './fonction.service';
import { FonctionDto } from 'src/dto/fonction.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('fonction')
export class FonctionController {
    constructor(private readonly roleservice : FonctionService) {}

    @Get()
    get() {
      return this.roleservice.get();
    }
<<<<<<< HEAD
=======

    @Get('statuts/:id')
  async getStatutsByFonctionId(@Param('id') id: string) {
    return this.roleservice.getStatutsByFonctionId(id);
  }
>>>>>>> b618e5f (ddelo)
  
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
    async createAgenda(@Body() agendadto: FonctionDto) {
      return await this.roleservice.create(agendadto);
    }
}
