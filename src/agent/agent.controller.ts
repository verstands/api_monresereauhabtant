import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AgentService } from './agent.service';
import { AgentInterface } from 'src/dto/agent.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
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

  @Put('agent/:id')
  updateAgent(@Param('id') id: string, @Body() agentUpdate: AgentInterface) {
    return this.agentService.updateAgent({ id, ...agentUpdate });
  }

  @Delete('agent/:id')
  deleteAgent(@Param('id') id: string) {
    return this.agentService.deleteAgent({ id });
  }
}
