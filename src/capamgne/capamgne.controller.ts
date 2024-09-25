import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CapamgneService } from './capamgne.service';
import { CapamgneDto } from 'src/dto/campagne.dt';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('capamgne')
export class CapamgneController {
    constructor(
        private readonly campagneservice : CapamgneService
    ){}

    @Get()
    getCampagnes(){
        return this.campagneservice.getcampagnes();
    }

    @Get(':id')
    getCampagne(@Param('id') id: string){
        return this.campagneservice.getcampagne({
            id,
<<<<<<< HEAD
        })
=======
        },
      )
>>>>>>> b618e5f (ddelo)
    }

    @Put(':id')
    updateagenda(@Param('id') id: string, @Body() agentUpdate: CapamgneDto) {
      return this.campagneservice.updateCampagne({ id, ...agentUpdate });
    }

    @Delete(':id')
    deleteAgenda(@Param('id') id: string) {
      return this.campagneservice.deleteCampagne({ id });
    }

    @Post()
    async createAgenda(@Body() data: CapamgneDto){
      return await this.campagneservice.create(data);
    }
}
