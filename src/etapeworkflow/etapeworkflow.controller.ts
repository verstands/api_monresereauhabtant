import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EtapeworkflowService } from './etapeworkflow.service';
import { EtapeWorkFlowDto } from 'src/dto/etapeworkflowdto';
import { EtapeWorkFlowInterface } from 'src/interface/EtapeWorkFlowINterface';

@Controller('etapeworkflow')
export class EtapeworkflowController {
    constructor(private readonly roleservice : EtapeworkflowService) {}

    @Get()
    get() {
      return this.roleservice.get();
    }

    @Get('/etapeworkflow/etapeworkflow')
    gets() {
      return this.roleservice.gets();
    }

  
    @Get(':id')
    getApplication(@Param('id') id: string) {
      return this.roleservice.getId({
        id,
      });
    }

    @Get('etape/etape')
    getwork() {
      return this.roleservice.getworkflowetape();
    }

    @Get('work/:id')
    getEtape(@Param('id') id: string) {
      return this.roleservice.getWorkflow({
        id,
      });
    }

    @Get('cat/cat')
    getCat() {
      return this.roleservice.getCat();
    }
   
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: EtapeWorkFlowDto) {
      return await this.roleservice.create(agendadto); 
    }

     @Put(':id')
      updateagenda(@Param('id') id: string, @Body() agentUpdate: EtapeWorkFlowInterface) {
        return this.roleservice.update({ id, ...agentUpdate });
      }
}
