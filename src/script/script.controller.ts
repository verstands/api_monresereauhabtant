import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ScriptService } from './script.service';
import { ScriptDto } from 'src/dto/script.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('script')
export class ScriptController {
    constructor(private readonly roleservice : ScriptService) {}

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
    async createAgenda(@Body() agendadto: ScriptDto) {
      return await this.roleservice.create(agendadto);
    }
}
