import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PiecejointService } from './piecejoint.service';
import { PieceJointDto } from 'src/dto/piecejoint.dto';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('piecejoint')
export class PiecejointController {
  constructor(private readonly roleservice: PiecejointService) {}

  @Get()
  get() {
    return this.roleservice.get();
  }

  @Get(':id')
  getApplication(@Param('id') id: string) {
    return this.roleservice.getId({ id });
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.roleservice.delete({ id });
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExtName = extname(file.originalname);
          const fileName = `${file.fieldname}-${uniqueSuffix}${fileExtName}`;
          callback(null, fileName);
        },
      }),
    }),
  )
  async createAgenda(
    @Body() pieceJointDto: PieceJointDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return await this.roleservice.create(pieceJointDto, file);
  }
}
