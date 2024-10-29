import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StatusService } from './status.service';
import { StatusDto } from 'src/dto/statut.dto';

@UseGuards(JwtAuthGuard)

@Controller('status')
export class StatusController {
    constructor(private readonly statusservice: StatusService) {}

  @Get()
  getApplications() {
    return this.statusservice.getSatus();
  }

  @Get('campagne/prospect/:id')
  getstatutcampagneprospect(@Param('id') id: string) {
    return this.statusservice.viewstattuCampagne(id);
  }

  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.statusservice.getStatu({
      id,
    });
  }
  @Get('categorie/:id')
    getEtape(@Param('id') id: string) {
      return this.statusservice.getCategorie({
        id,
      });
    }

  @Put(':id')
  updateagenda(@Param('id') id: string, @Body() agentUpdate: StatusDto) {
    return this.statusservice.updateSatus({ id, ...agentUpdate });
  }

  @Delete(':id')
  deleteAgenda(@Param('id') id: string) {
    return this.statusservice.deleteStatus({ id });
  }

  @Post()
  async createAgenda(@Body() agendadto: StatusDto) {
    return await this.statusservice.create(agendadto);
  }
}
