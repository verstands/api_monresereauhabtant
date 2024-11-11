import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GroupeuserService } from './groupeuser.service';
import { GroupeUserDto } from 'src/dto/groupeuser.dto';

@Controller('groupeuser')
export class GroupeuserController {
    constructor(private readonly roleservice: GroupeuserService) { }

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

    @Get('getGroupeByAgent/:id')
    getGroupeByAgent(@Param('id') id: string) {
        return this.roleservice.getGroupeByAgent({
            id,
        });
    }

    @Get('getGroupeByAgentgroupe/:idgroupe/:idrole')
    getGroupeByAgentAndGroupe(
        @Param('idgroupe') idgroupe: string,
        @Param('idrole') idrole: string
    ) {
        return this.roleservice.getGroupeByAgentAndGroupe({
            idgroupe,
            idrole
        });
    }


    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.roleservice.delete({ id });
    }

    @Post()
    async createAgenda(@Body() agendadto: GroupeUserDto) {
        return await this.roleservice.create(agendadto);
    }
}
