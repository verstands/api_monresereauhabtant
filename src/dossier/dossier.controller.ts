import { Body, Controller, Delete, Get, Param, Put, Query, UseGuards } from '@nestjs/common';
import { DossierService } from './dossier.service';
import { PospectDto } from 'src/dto/pospect.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PaginationDto } from 'src/dto/paginationPage.dto';

@UseGuards(JwtAuthGuard)
@Controller('dossier')
export class DossierController {
    constructor(private readonly roleservice : DossierService) {}

    @Get()
    async get(@Query() paginationdto: PaginationDto) {
      return this.roleservice.get(paginationdto);
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

    @Get('by-role/:id_role/:iduser')
    async getProspectsByRole(@Param('id_role') id_role: string,@Param('iduser') iduser: string, @Query() paginationdto: PaginationDto) {
      return this.roleservice.findProspectsByRole(id_role, paginationdto, iduser);
    }
    
    @Put(':id')
    updateagenda(@Param('id') id: string, @Body() agentUpdate: PospectDto) {
      return this.roleservice.update({ id, ...agentUpdate });
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
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

    @Put('nrp/:id/:idstatut')
  updatenrp(@Param('id') id: string, @Param('idstatut') idstatut: string) {
    return this.roleservice.updateNRP({ id, idstatut });
  }

}
