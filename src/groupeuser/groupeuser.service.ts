import { Injectable } from '@nestjs/common';
import { GroupeUserDto } from 'src/dto/groupeuser.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GroupeuserService {
    constructor(private readonly prismaservice: PrismaService
    ) {}

    async get() {
      const data = await this.prismaservice.groupeUser.findMany({
        orderBy:{
            "id" : "desc"
        },
      });
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.groupeUser.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }

    async getGroupeByAgent({ id }: { id: string }) {
        const data = await this.prismaservice.groupeUser.findMany({
          where: {
            id_groupe : id,
          },
          include : {
            groupe : true,
            agentgroupe : {
                include : {
                    fonction : true
                }
            }
          }
        });
        return { data: data };
      }


      async getGroupeByAgentAndGroupe({ idgroupe, idrole }: { idrole: string, idgroupe : string }) {
        const data = await this.prismaservice.groupeUser.findMany({
          where: {
            id_groupe : idgroupe,
            agentgroupe : {
                id_fonction : idrole
            }
          },
          include : {
            groupe : true,
            agentgroupe : {
                include : {
                    fonction : true
                }
            }
          }
        });
        return { data: data };
      }
  
    async update({ id, ...data }: { id: string } & GroupeUserDto) {
      const update = await this.prismaservice.groupeUser.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      });
      return update;
    }
  
    async delete({ id }: { id: string }) {
      await this.prismaservice.groupeUser.delete({
        where: {
          id,
        },
      });
      return { message: 'groupe supprimé avec success ' };
    }

    async create(applicationdto: GroupeUserDto) {
        const createAgent = await this.prismaservice.groupeUser.create({
          data: applicationdto,
        });
        return createAgent;
    }
}
