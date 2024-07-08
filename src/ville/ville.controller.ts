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
import { VilleService } from './ville.service';
import { VilleDto } from 'src/dto/ville.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('ville')
export class VilleController {
  constructor(private readonly villeService: VilleService) {}

  @Get()
  getApplications() {
    return this.villeService.getVilles();
  }

  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.villeService.getVille({
      id,
    });
  }

  @Put(':id')
  updateagenda(@Param('id') id: string, @Body() agentUpdate: VilleDto) {
    return this.villeService.updateApplication({ id, ...agentUpdate });
  }

  @Delete(':id')
  deleteAgenda(@Param('id') id: string) {
    return this.villeService.deleteVille({ id });
  }

  @Post()
  async createAgenda(@Body() agendadto: VilleDto) {
    return await this.villeService.create(agendadto);
  }
}
