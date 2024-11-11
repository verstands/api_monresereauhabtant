import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GroupeService } from './groupe.service';
import { GroupeDto } from 'src/dto/grouoe.dto';

@Controller('groupe')
export class GroupeController {
    constructor(private readonly roleservice : GroupeService) {}

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
    async createAgenda(@Body() agendadto: GroupeDto) {
      return await this.roleservice.create(agendadto);
    }
}
