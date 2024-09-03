import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TyperevenuService } from './typerevenu.service';
import { TypeRevenuDto } from 'src/dto/typerevenu.dto';

@UseGuards(JwtAuthGuard)
@Controller('typerevenu')
export class TyperevenuController {
    constructor(private readonly typerevenuService: TyperevenuService) {}

  @Get()
  getTyperevenus() {
    return this.typerevenuService.getTyperevenus();
  }

  @Get(':id')
  getTyperevenu(@Param('id') id: string) {
    return this.typerevenuService.getTyperevenu({
      id,
    });
  }

  @Put(':id')
  updateTyperevenu(@Param('id') id: string, @Body() agentUpdate: TypeRevenuDto) {
    return this.typerevenuService.updateTyperevenu({ id, ...agentUpdate });
  }

  @Delete(':id')
  deleteTyperevenu(@Param('id') id: string) {
    return this.typerevenuService.deleteTyperevenu({ id });
  }

  @Post()
  async createAgenda(@Body() agendadto: TypeRevenuDto) {
    return await this.typerevenuService.create(agendadto);
  }
}
