import { Injectable } from '@nestjs/common';
import { PaginationDto } from 'src/dto/paginationPage.dto';
import { PospectDto } from 'src/dto/pospect.dto';
import { PrismaService } from 'src/prisma.service';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';

@Injectable()
export class DossierService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get(paginationdto: PaginationDto) {
      const data = await this.prismaservice.pospects.findMany({
        where: {
          statuslead: "1",
          statusdossier: "0"
        },
        orderBy: {
          "id": "desc"
        },
        include: {
          agentpospect: true,
          capagnepospect: true,
          produitpospect: true,
          statutp: true,
        },
        skip: Number(paginationdto.skip),
        take: Number(paginationdto.limit) ?? DEFAULT_PAGE_SIZE,
      });
      return { data: data };
    }

    async getOne() {
      const data = await this.prismaservice.pospects.findFirst({
        orderBy:{
            "id" : "desc"
        },
        where: {
          statuslead : "1",
          statusdossier : "0"
        },
        include:{
            agentpospect : true,
            capagnepospect : true,
            produitpospect : true
        }
      });
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.pospects.findUnique({
        where: {
          id: id,
        },
        include:{
            agentpospect : true,
            capagnepospect : true,
            produitpospect : true
        }
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & PospectDto) {
      const update = await this.prismaservice.pospects.update({
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
      await this.prismaservice.pospects.delete({
        where: {
          id,
        },
      });
      return { message: 'prospect supprimé avec success ' };
    }
    
    async findProspectsByRole(id_role: string, paginationdto: PaginationDto, iduser : string) {
      return this.prismaservice.pospects.findMany({
        where: {
          id_confirmateur : iduser,
          statutp: {
            etape: {
              CatgorieRole: {
                some: {
                  id_role: id_role, 
                },
              },
            },
          },
          statuslead : "1",
        },
        include: {
          produitpospect : true,
          capagnepospect : true,
          statutp: {
            include: {
              etape: true, 
              catworkflow: {
                include: {
                  
                },
              },
            },
          },
        },
        skip: Number(paginationdto.skip), 
        take: Number(paginationdto.limit) ?? DEFAULT_PAGE_SIZE,
      });
    }

    async findProspectsByRoleAdmin(paginationdto: PaginationDto) {
      return this.prismaservice.pospects.findMany({
        where: {
          statutp: {
            etape: {
              CatgorieRole: {
                
              },
            },
          },
          statuslead : "1",
        },
        include: {
          produitpospect : true,
          capagnepospect : true,
          statutp: {
            include: {
              etape: true, 
              catworkflow: {
                include: {
                  
                },
              },
            },
          },
        },
        skip: Number(paginationdto.skip), 
        take: Number(paginationdto.limit) ?? DEFAULT_PAGE_SIZE,
      });
    }


    async getIdOneProspects(id: string) {
      const data = await this.prismaservice.pospects.findFirst({
        where: {
          statuslead: '1',
          statusdossier: '0',
          id_user: id
        },
        orderBy: {
          id: 'desc',
        },
        include: {
          agentpospect: true,
          capagnepospect: true,
          produitpospect: {
            include: {
              work: true,
            }
          }
        },
      });
  
      return { data };
    }
  
    async getIdOneProspectCampagne({ id }: { id: string }) {
      const data = await this.prismaservice.pospects.findFirst({
        where: {
          id_campagne: id,
          statuslead: '1',
          statusdossier: '0',
        },
        orderBy: {
          id: 'desc',
        },
        include: {
          agentpospect: true,
          capagnepospect: true,
          produitpospect: {
            include: {
              work: true,
            }
          }
        },
      });
  
      return { data: data };
    }
  
    async getIdOneProspectCampagneId({ id, id_user }: { id: string, id_user: string }) {
      const data = await this.prismaservice.pospects.findFirst({
        where: {
          id_campagne: id,
          id_user: id_user,
          statuslead: '1',
          statusdossier: '0',
        },
        orderBy: {
          id: 'desc',
        },
        include: {
          agentpospect: true,
          capagnepospect: true,
          produitpospect: {
            include: {
              work: true,
            }
          }
        },
      });
  
      return { data: data };
    }

    async updateNRP({ id, idstatut }: { id: string, idstatut: string }) {
      const update = await this.prismaservice.pospects.update({
        where: {
          id,
        },
        data: {
          status: idstatut,
          statusdossier: '1',
        },
      });
      return { message: 'prospect Ne repond pas', data: update };
    }
    
}
