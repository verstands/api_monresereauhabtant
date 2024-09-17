import { Controller, Delete, Get, Param, Query, UseGuards } from '@nestjs/common';
import { LoggingService } from './logging.service';
import { PaginationDto } from 'src/dto/paginationPage.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('logging')
export class LoggingController {
  constructor(private readonly roleservice: LoggingService) {}

  @Get()
  async get(@Query() paginationdto: PaginationDto) {
    return this.roleservice.get(paginationdto);
  }

  @Get(':id')
  async getApplication(@Param('id') id: string) {
    return this.roleservice.getId({
      id,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.roleservice.delete({ id });
  }
}
