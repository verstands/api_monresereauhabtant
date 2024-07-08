import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { InstallateurService } from './installateur.service';
import { InstallateurDto } from 'src/dto/installateur.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('installateur')
export class InstallateurController {
    constructor(private readonly installateurservice : InstallateurService) {}

  @Get()
  get() {
    return this.installateurservice.get();
  }

  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.installateurservice.getId({
      id,
    });
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() agentUpdate: InstallateurDto) {
    return this.installateurservice.update({ id, ...agentUpdate });  
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.installateurservice.delete({ id });
  }

  @Post()
  async createAgenda(@Body() agendadto: InstallateurDto) {
    return await this.installateurservice.create(agendadto);
  }
}
