import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AcceroleService } from './accerole.service';
import { AccesRoleDto } from 'src/dto/accerole.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('accerole')
export class AcceroleController {
    constructor(private readonly roleservice : AcceroleService) {}

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
   
    @Put(':id')
    update(@Param('id') id: string, @Body() agentUpdate: AccesRoleDto) {
      return this.roleservice.update({ id, ...agentUpdate });  
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: AccesRoleDto) {
      return await this.roleservice.create(agendadto);
    }
}
