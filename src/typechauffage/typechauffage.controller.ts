import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TypechauffageService } from './typechauffage.service';
import { TypechauffageDto } from 'src/dto/typechauffage.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('typechauffage')
export class TypechauffageController {
    constructor(private readonly villeService: TypechauffageService) {}

  @Get()
  getTypechauffages() {
    return this.villeService.getTypechauffages();
  }

  @Get(':id')
  getTypechauffage(@Param('id') id: string) {
    return this.villeService.getTypechauffage({
      id,
    });
  }

  @Put(':id')
  updateTypechauffage(@Param('id') id: string, @Body() agentUpdate: TypechauffageDto) {
    return this.villeService.updateTypechauffage({ id, ...agentUpdate });
  }

  @Delete(':id')
  deleteTypechauffage(@Param('id') id: string) {
    return this.villeService.deleteTypechauffage({ id });
  }

  @Post()
  async createAgenda(@Body() agendadto: TypechauffageDto) {
    return await this.villeService.create(agendadto);
  }
}
