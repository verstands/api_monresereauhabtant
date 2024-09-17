import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WorkflowService } from './workflow.service';
import { WorkFlowDto } from 'src/dto/workflow.dto';

@Controller('workflow')
export class WorkflowController {
    constructor(private readonly workflow: WorkflowService) {}

  @Get()
  getApplications() {
    return this.workflow.get();
  }

  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.workflow.getid({
      id,
    });
  }

  @Put(':id')
  updateagenda(@Param('id') id: string, @Body() agentUpdate: WorkFlowDto) {
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
