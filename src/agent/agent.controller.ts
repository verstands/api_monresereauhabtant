import { Controller, Get, Param } from '@nestjs/common';
import { AgentService } from './agent.service';

@Controller()
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Get('agents')
  getAgents() {
    return this.agentService.getAgents();
  }

  @Get('agent/:id')
  getAgent(@Param('id') id: string) {
    return this.agentService.getAgent({
      id,
    });
  }
}
