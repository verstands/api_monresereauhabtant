import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { GroupeService } from './groupe.service';
import { GroupeDto } from 'src/dto/grouoe.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: string, @Body() agentUpdate: GroupeDto) {
      return this.roleservice.update({ id, ...agentUpdate });
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
