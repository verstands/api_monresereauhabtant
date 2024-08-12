import { Body, Controller, Delete, Get, Param, Post, Put,  UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { ModelmailService } from './modelmail.service';
import { ModeleMailDto } from 'src/dto/mailmodele.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';

@Controller('modelmail')
export class ModelmailController {
    constructor(private readonly roleservice : ModelmailService) {}

    @Get()
    get() {
      return this.roleservice.get();
    }
  
    @Get(':id')
    getId(@Param('id') id: string) {
      return this.roleservice.getId({
        id,
      });
    }
    
    @Get('mail/:id_campagne/:id_fonction')
    getMails(
      @Param('id_campagne') id_campagne: string, 
      @Param('id_fonction') id_fonction: string
    ) {
      return this.roleservice.getMail(id_campagne, id_fonction);
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() agentUpdate: ModeleMailDto) {
      return this.roleservice.update({ id, ...agentUpdate });
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.roleservice.delete({ id });
    }

  @Post()
  @UseInterceptors(FileInterceptor('fichier'))
  async create(
    @Body() formData: any,
    @UploadedFile() file: Express.Multer.File
  ) {
    try {
      if (file) {
        formData.fichier = file.path; 
      }

      const dto: ModeleMailDto = {
        id_user: formData.id_user,
        active: formData.active === 'true' || formData.active === true, 
        bccexp: formData.bccexp,
        ccexp: formData.ccexp,
        contenue: formData.contenue,
        description: formData.description,
        disnataireexp: formData.disnataireexp,
        emailexp: formData.emailexp,
        fichier: formData.fichier || null,
        nom: formData.nom,
        nomexp: formData.nomexp,
        id_campagne: formData.id_campagne,
        id_fonction: formData.id_fonction,
        sujet: formData.sujet,
      };

      return await this.roleservice.create(dto);
    } catch (error) {
      console.error('Error in create method:', error);
      throw new BadRequestException('Validation failed. Please check your input.');
    }
  }
}
