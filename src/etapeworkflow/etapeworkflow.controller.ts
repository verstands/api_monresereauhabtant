import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EtapeworkflowService } from './etapeworkflow.service';
import { EtapeWorkFlowDto } from 'src/dto/etapeworkflowdto';

@Controller('etapeworkflow')
export class EtapeworkflowController {
    constructor(private readonly roleservice : EtapeworkflowService) {}

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

    @Get('work/:id')
    getEtape(@Param('id') id: string) {
      return this.roleservice.getWorkflow({
        id,
      });
    }
   
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: EtapeWorkFlowDto) {
      return await this.roleservice.create(agendadto); 
    }
}
