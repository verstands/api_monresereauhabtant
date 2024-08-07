import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PospectService } from './pospect.service';
import { PospectDto } from 'src/dto/pospect.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('pospect')
export class PospectController {
    constructor(private readonly roleservice : PospectService) {}

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

    @Get('one/one')
    getIdOne() {
      return this.roleservice.getIdOneProspect();
    }
    @Put('nrp/:id')
    updatenrp(@Param('id') id: string) {
      return this.roleservice.updateNRP({ id });
    }

    @Put('rdv/:id')
    updaterdv(@Param('id') id: string) {
      return this.roleservice.updateRDV({ id });
    }

    @Put('nonvalide/:id')
    updatenonvalide(@Param('id') id: string) {
      return this.roleservice.updateNonValide({ id });
    }

    @Put('pasinteresse/:id')
    updatePasInteresse(@Param('id') id: string) {
      return this.roleservice.updatePasInteresse({ id });
    }

    @Put('npp/:id')
    updateNPP(@Param('id') id: string) {
      return this.roleservice.updateNPP({ id });
    }

    @Put('mn/:id')
    updateMN(@Param('id') id: string) {
      return this.roleservice.updateMN({ id });
    }

    @Put('fl/:id')
    updateFl(@Param('id') id: string) {
      return this.roleservice.updateFL({ id });
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() agentUpdate: PospectDto) {
      return this.roleservice.update({ id, ...agentUpdate });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: PospectDto) {
      return await this.roleservice.create(agendadto);
    }
}
