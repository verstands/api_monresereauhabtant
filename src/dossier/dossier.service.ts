import { Injectable } from '@nestjs/common';
import { PaginationDto } from 'src/dto/paginationPage.dto';
import { PospectDto } from 'src/dto/pospect.dto';
import { PrismaService } from 'src/prisma.service';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';

@Injectable()
export class DossierService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.pospects.findMany({
        orderBy:{
            "id" : "desc"
        },
        where: {
            status : "1"
        },
        include:{
            agentpospect : true,
            capagnepospect : true,
            produitpospect : true
        }
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
    
}
