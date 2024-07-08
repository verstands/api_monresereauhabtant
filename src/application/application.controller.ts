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
import { ApplicationService } from './application.service';
import { ApplicationDto } from 'src/dto/application.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationservice: ApplicationService) {}

  @Get()
  getApplications() {
    return this.applicationservice.getApplications();
  }

  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.applicationservice.getApplication({
      id,
    });
  }

  @Put(':id')
  updateagenda(@Param('id') id: string, @Body() agentUpdate: ApplicationDto) {
    return this.applicationservice.updateApplication({ id, ...agentUpdate });
  }

  @Delete(':id')
  deleteAgenda(@Param('id') id: string) {
    return this.applicationservice.deleteApplication({ id });
  }

  @Post()
  async createAgenda(@Body() agendadto: ApplicationDto) {
    return await this.applicationservice.create(agendadto);
  }
}
