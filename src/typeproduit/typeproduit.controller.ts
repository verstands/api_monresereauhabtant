import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { TypeproduitService } from './typeproduit.service';
import { TypeProduitDto } from 'src/dto/typeproduit.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('typeproduit')
export class TypeproduitController {
    constructor(private readonly typeproduitservice : TypeproduitService) {}

    @Get()
    get() {
      return this.typeproduitservice.get();
    }
  
    @Get(':id')
    getApplication(@Param('id') id: string) {
      return this.typeproduitservice.getId({
        id,
      });
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() agentUpdate: TypeProduitDto) {
      return this.typeproduitservice.update({ id, ...agentUpdate });  
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.typeproduitservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: TypeProduitDto) {
      return await this.typeproduitservice.create(agendadto);
    }
}
