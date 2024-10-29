import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { PospectService } from './pospect.service';
import { PospectDto } from 'src/dto/pospect.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PaginationDto } from 'src/dto/paginationPage.dto';

@UseGuards(JwtAuthGuard)
@Controller('pospect')
export class PospectController {
  constructor(private readonly roleservice: PospectService) {}

  @Get()
  async getPospects(@Query() paginationdto: PaginationDto) {
    return this.roleservice.get(paginationdto);
  }

  @Get('agent/:id')
  getAGENT(@Param('id') id: string) {
    return this.roleservice.getAgent({ id });
  }

  @Get('one/one')
  getIdOne() {
    return this.roleservice.getIdOneProspect();
  }

  @Get('one/one/:id')
  getIdOneId(@Param('id') id: string) {
    return this.roleservice.getIdOneProspects(id);
  }

  @Get('oneCampagne/oneCampagne/:id')
  getIdOneCampagne(@Param('id') id: string) {
    return this.roleservice.getIdOneProspectCampagne({
      id,
    });
  }

  @Get('oneCampagne/oneCampagne/:id/:id_user')
  getIdOneCampagneID(
    @Param('id') id: string,
    @Param('id_user') id_user: string
  ) {
    return this.roleservice.getIdOneProspectCampagneId({
      id,
      id_user,
    });
  }



  @Get('countNouveau/countNouveau/:id')
  getcountNouveau(@Param('id') id: string) {
    return this.roleservice.getcountNouveau({id});
  }

  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.roleservice.getId({
      id,
    });
  }

  @Put('nrp/:id/:idstatut')
  updatenrp(@Param('id') id: string, @Param('idstatut') idstatut: string) {
    return this.roleservice.updateNRP({ id, idstatut });
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

  @Get('status/campagne/:id')
  getIdStatucampagne(@Param('id') id: string) {
    return this.roleservice.getCountStatusByCampagne(id);
  }

  @Get('suivileadagent/:id')
  getSuivileadAgent(@Param('id') id: string) {
    return this.roleservice.getSuiviLeadAgent({ id });
  }

  @Get('suivilead')
  async getSuiviLead(@Query() paginationdto: PaginationDto) {
    return this.roleservice.getSuiviLead(paginationdto);
  }
}
