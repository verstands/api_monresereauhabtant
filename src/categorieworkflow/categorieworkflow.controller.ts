import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategorieworkflowService } from './categorieworkflow.service';
import { CategorieWorkFlowDto } from 'src/dto/categorieworkflow';

@Controller('categorieworkflow')
export class CategorieworkflowController {
    constructor(private readonly roleservice : CategorieworkflowService) {}

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

    @Get('etape/:id')
    getEtape(@Param('id') id: string) {
      return this.roleservice.getEtape({
        id,
      });
    }
   
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: CategorieWorkFlowDto) {
      return await this.roleservice.create(agendadto); 
    }
}
