import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { FonctionService } from './fonction.service';
import { FonctionDto } from 'src/dto/fonction.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('fonction')
export class FonctionController {
  constructor(private readonly roleservice: FonctionService) { }

  @Get()
  get() {
    return this.roleservice.get();
  }

  @Get('statuts/:id/:id_workflow')
  async getStatutsByFonctionId(
    @Param('id') id: string,
    @Param('id_workflow') id_workflow: string
  ) {
    return this.roleservice.getStatutsByFonctionId(id, id_workflow);
  }

  @Get('role/rolemodule/:id')
  async getFonctionModule(@Param('id') id: string) {
    return this.roleservice.getFonctionModule({
      id,
    });
  }


  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.roleservice.getId({
      id,
    });
  }

  @Put(':id')
  updateAgent(@Param('id') id: string, @Body() agentUpdate: FonctionDto) {
    return this.roleservice.update({ id, ...agentUpdate });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.roleservice.delete({ id });
  }

  @Post()
  async createAgenda(@Body() agendadto: FonctionDto) {
    return await this.roleservice.create(agendadto);
  }
}
