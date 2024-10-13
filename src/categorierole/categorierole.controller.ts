import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategorieroleService } from './categorierole.service';
import { CategorieRoleDto } from 'src/dto/categorierole.dto';

@Controller('categorierole')
export class CategorieroleController {
    constructor(private readonly roleservice : CategorieroleService) {}

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

    @Get('categorierole/:id')
    getEtape(@Param('id') id: string) {
      return this.roleservice.getCategorieRole({
        id,
      });
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: CategorieRoleDto) {
      return await this.roleservice.create(agendadto); 
    }
}
