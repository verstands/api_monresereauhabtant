import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ArchivageService } from './archivage.service';
import { ArchivageDto } from 'src/dto/archivage.dto';

@UseGuards(JwtAuthGuard)
@Controller('archivage')
export class ArchivageController {
    constructor(private readonly archivageservice : ArchivageService) {}

    @Get()
    get() {
      return this.archivageservice.get();
    }
  
    @Get(':id')
    getApplication(@Param('id') id: string) {
      return this.archivageservice.getId({
        id,
      }); 
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() agentUpdate: ArchivageDto) {
      return this.archivageservice.update({ id, ...agentUpdate });  
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.archivageservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: ArchivageDto) {
      return await this.archivageservice.create(agendadto);
    }
}
