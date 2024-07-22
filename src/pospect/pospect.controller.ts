import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
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
   
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: PospectDto) {
      return await this.roleservice.create(agendadto);
    }
}
