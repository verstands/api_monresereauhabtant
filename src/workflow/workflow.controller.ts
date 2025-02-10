import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WorkflowService } from './workflow.service';
import { WorkFlowDto } from 'src/dto/workflow.dto';
import { WorkflowInterface } from 'src/interface/WorkflowIterface';

@Controller('workflow')
export class WorkflowController {
    constructor(private readonly workflow: WorkflowService) {}

  @Get()
  getApplications() {
    return this.workflow.get();
  }

  @Get('workffowagent/:id')
  getworkflowagent(@Param('id') id: string) {
    return this.workflow.getAgent(id);
  }

  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.workflow.getid({
      id,
    });
  }

  @Put(':id')
  updateagenda(@Param('id') id: string, @Body() agentUpdate: WorkflowInterface) {
    return this.workflow.update({ id, ...agentUpdate });
  }

  @Delete(':id')
  deleteAgenda(@Param('id') id: string) {
    return this.workflow.delete({ id });
  }

  @Post()
  async createAgenda(@Body() agendadto: WorkFlowDto) {
    return await this.workflow.create(agendadto);
  }
}
