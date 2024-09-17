import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ModulepersoService } from './moduleperso.service';
import { ModulePersoDto } from 'src/dto/moduleperso.dto';

@Controller('moduleperso')
export class ModulepersoController {
    constructor(private readonly alldata : ModulepersoService) {}

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
    update(@Param('id') id: string, @Body() agentUpdate: ModulePersoDto) {
      return this.alldata.update({ id, ...agentUpdate });  
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.alldata.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: ModulePersoDto) {
      return await this.alldata.create(agendadto);
    }
}
