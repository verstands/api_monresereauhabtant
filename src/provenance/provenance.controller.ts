import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProvenanceService } from './provenance.service';
import { ProvenanceDto } from 'src/dto/provanance.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('provenance')
export class ProvenanceController {
    constructor(private readonly provenanceservice : ProvenanceService) {}

    @Get()
    get() {
      return this.provenanceservice.get();
    }
  
    @Get(':id')
    getApplication(@Param('id') id: string) {
      return this.provenanceservice.getId({
        id,
      });
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() agentUpdate: ProvenanceDto) {
      return this.provenanceservice.update({ id, ...agentUpdate });  
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.provenanceservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: ProvenanceDto) {
      return await this.provenanceservice.create(agendadto);
    }
}
