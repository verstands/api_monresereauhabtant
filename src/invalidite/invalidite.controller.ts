import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { InvaliditeService } from './invalidite.service';
import { InvaliditeDto } from 'src/dto/Ivalidite.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';


@UseGuards(JwtAuthGuard)
@Controller('invalidite')
export class InvaliditeController {
    constructor(private readonly invaliditeservice : InvaliditeService) {}

    @Get()
    get() {
      return this.invaliditeservice.get();
    }
  
    @Get(':id')
    getApplication(@Param('id') id: string) {
      return this.invaliditeservice.getId({
        id,
      });
    }
  
    @Put(':id')
    update(@Param('id') id: string, @Body() agentUpdate: InvaliditeDto) {
      return this.invaliditeservice.update({ id, ...agentUpdate });  
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.invaliditeservice.delete({ id });
    }
  
    @Post()
    async createAgenda(@Body() agendadto: InvaliditeDto) {
      return await this.invaliditeservice.create(agendadto);
    }
}
