import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuDto } from 'src/dto/menu.dto';

@Controller('menu')
export class MenuController {
    constructor(private readonly alldata : MenuService) {}

    @Get()
    get() {
      return this.alldata.get();
    }
  
    @Get(':id')
    getApplication(@Param('id') id: string) {
      return this.alldata.getId({
        id,
      });
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() agentUpdate: MenuDto) {
      return this.alldata.update({ id, ...agentUpdate });  
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.alldata.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: MenuDto) {
      return await this.alldata.create(agendadto);
    }
}
