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
@Controller('agent')
export class AgentController {
  constructor(private readonly agentService: AgentService) {}

  @Get()
  getAgents() {
    return this.agentService.getAgents();
  }

  @Get(':id')
  getAgent(@Param('id') id: string) {
    return this.agentService.getAgent({
      id,
    });
  }

  @Put(':id')
  updateAgent(@Param('id') id: string, @Body() agentUpdate: AgentInterface) {
    return this.agentService.updateAgent({ id, ...agentUpdate });
  }

  @Delete(':id')
  deleteAgent(@Param('id') id: string) {
    return this.agentService.deleteAgent({ id });
  }
}
