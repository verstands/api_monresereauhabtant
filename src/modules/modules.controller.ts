import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { ModuleDto } from 'src/dto/module.dto';

@Controller('modules')
export class ModulesController {
    constructor(private readonly alldata : ModulesService) {}

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
    update(@Param('id') id: string, @Body() agentUpdate: ModuleDto) {
      return this.alldata.update({ id, ...agentUpdate });  
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.alldata.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: ModuleDto) {
      return await this.alldata.create(agendadto);
    }
}
