import { Body, Controller, Delete, Get, Param, Put, UseGuards } from '@nestjs/common';
import { DossierService } from './dossier.service';
import { PospectDto } from 'src/dto/pospect.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('dossier')
export class DossierController {
    constructor(private readonly roleservice : DossierService) {}

    @Get()
    get() {
      return this.roleservice.get();
    }

    @Get('/one')
    getOne() {
      return this.roleservice.getOne();
    }
  
    @Get(':id')
    getApplication(@Param('id') id: string) {
      return this.roleservice.getId({
        id,
      });
    }

    @Get('by-role/:id_role')
    async getProspectsByRole(@Param('id_role') id_role: string) {
      return this.roleservice.findProspectsByRole(id_role);
    }
    
    @Put(':id')
    updateagenda(@Param('id') id: string, @Body() agentUpdate: PospectDto) {
      return this.roleservice.update({ id, ...agentUpdate });
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }
}
