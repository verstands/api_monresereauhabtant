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

  @Get('oneCampagne/oneCampagne/:id')
  getIdOneCampagne(@Param('id') id: string) {
    return this.roleservice.getIdOneProspectCampagne({
      id,
    });
  }

  @Get('countNouveau/countNouveau')
  getcountNouveau() {
    return this.roleservice.getcountNouveau();
  }

  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.roleservice.getId({
      id,
    });
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
