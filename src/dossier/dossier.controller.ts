import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { DossierService } from './dossier.service';
import { PospectDto } from 'src/dto/pospect.dto';

@Controller('dossier')
export class DossierController {
    constructor(private readonly roleservice : DossierService) {}

    @Get()
    get() {
      return this.roleservice.get();
    }
  
    @Get(':id')
    getApplication(@Param('id') id: string) {
      return this.roleservice.getId({
        id,
      });
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