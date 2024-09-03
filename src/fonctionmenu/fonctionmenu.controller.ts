import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { FonctionmenuService } from './fonctionmenu.service';
import { FonctionMenuDto } from 'src/dto/FonctionMenu.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('fonctionmenu')
export class FonctionmenuController {
    constructor(private readonly roleservice : FonctionmenuService) {}

    @Get()
    get() {
      return this.roleservice.get();
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
    async createAgenda(@Body() agendadto: FonctionMenuDto) {
      return await this.roleservice.create(agendadto);
    }
}
