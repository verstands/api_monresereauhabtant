import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from 'src/dto/role.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('role')
export class RoleController {
    constructor(private readonly roleservice : RoleService) {}

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
    update(@Param('id') id: string, @Body() agentUpdate: RoleDto) {
      return this.roleservice.update({ id, ...agentUpdate });  
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: RoleDto) {
      return await this.roleservice.create(agendadto);
    }
}
