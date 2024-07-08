import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AccesapplicationService } from './accesapplication.service';
import { AccesApplicationDto } from 'src/dto/accesapplication';

@Controller('accesapplication')
export class AccesapplicationController {
  constructor(
    private readonly accesapplicationservice: AccesapplicationService,
  ) {}

  @Get()
  getAgendas() {
    return this.accesapplicationservice.getAccesApplications();
  }

  @Get(':id')
  getAgenda(@Param('id') id: string) {
    return this.accesapplicationservice.getAccesApplication({
      id,
    });
  }

  @Put(':id')
  updateagenda(
    @Param('id') id: string,
    @Body() agentUpdate: AccesApplicationDto,
  ) {
    return this.accesapplicationservice.updateApplication({
      id,
      ...agentUpdate,
    });
  }

  @Delete(':id')
  deleteAgenda(@Param('id') id: string) {
    return this.accesapplicationservice.deleteApplication({ id });
  }

  @Post()
  async createAgenda(@Body() agendadto: AccesApplicationDto){
    return await this.accesapplicationservice.create(agendadto);
  }
}
