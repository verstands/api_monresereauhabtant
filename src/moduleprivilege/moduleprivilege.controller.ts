import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ModuleprivilegeService } from './moduleprivilege.service';
import { ModulePrivilegeDto } from 'src/dto/moduleprivilege.dto';

@Controller('moduleprivilege')
export class ModuleprivilegeController {
    constructor(private readonly alldata : ModuleprivilegeService) {}

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
    update(@Param('id') id: string, @Body() agentUpdate: ModulePrivilegeDto) {
      return this.alldata.update({ id, ...agentUpdate });  
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.alldata.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: ModulePrivilegeDto) {
      return await this.alldata.create(agendadto);
    }
}
