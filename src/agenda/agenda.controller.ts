import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AgendaDto } from 'src/dto/agenda.dto';

@UseGuards(JwtAuthGuard)
@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Get()
  getAgendas() {
    return this.agendaService.getAgendas();
  }

  @Get(':id')
  getAgenda(@Param('id') id: string) {
    return this.agendaService.getAgenda({
      id,
    });
  }

  @Put(':id')
  updateAgent(@Param('id') id: string, @Body() agentUpdate: AgendaDto) {
    return this.agendaService.updateAgenda({ id, ...agentUpdate });
  }

  @Delete(':id')
  deleteAgent(@Param('id') id: string) {
    return this.agendaService.deleteAgenda({ id });
  }

  @Post()
  async createAgent(@Body() agendadto: AgendaDto){
    return await this.agendaService.create(agendadto);
  }
}
