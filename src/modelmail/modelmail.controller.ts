import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ModelmailService } from './modelmail.service';
import { ModeleMailDto } from 'src/dto/mailmodele.dto';

@Controller('modelmail')
export class ModelmailController {
    constructor(private readonly roleservice : ModelmailService) {}

    @Get()
    get() {
      return this.roleservice.get();
    }
  
    @Get(':id')
    getId(@Param('id') id: string) {
      return this.roleservice.getId({
        id,
      });
    }
    
    @Get('mail/:id_campagne/:id_fonction')
    getMails(
      @Param('id_campagne') id_campagne: string, 
      @Param('id_fonction') id_fonction: string
    ) {
      return this.roleservice.getMail(id_campagne, id_fonction);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() agentUpdate: ModeleMailDto) {
      return this.roleservice.update({ id, ...agentUpdate });
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }

    @Post()
    async create(@Body() agendadto: ModeleMailDto) {
      return await this.roleservice.create(agendadto);
    }
}
