import { Injectable } from '@nestjs/common';
import { PaginationDto } from 'src/dto/paginationPage.dto';
import { PospectDto } from 'src/dto/pospect.dto';
import { PrismaService } from 'src/prisma.service';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';

@Injectable()
export class PospectService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get( paginationdto : PaginationDto) {
      const data = await this.prismaservice.pospects.findMany({
        orderBy:{
            "id" : "desc"
        },
        include:{
            agentpospect : true,
            capagnepospect : true,
            produitpospect : true
        },
        skip : paginationdto.skip,
        take : paginationdto.limit ?? DEFAULT_PAGE_SIZE
      });
      return { data: data };
    }

    async getAgent({ id }: { id: string }) {
      const data = await this.prismaservice.pospects.findMany({
        where: {
          id_user : id,
        },
        orderBy:{
            "id" : "desc"
        },
        include:{
            agentpospect : true,
            capagnepospect : true,
            produitpospect : true
        }
      });
      return { data: data };
    }    

    async getcountNouveau() {
      const data = await this.prismaservice.pospects.count({
        where: {
          status : "0"
        },
      });

      const dataNRP = await this.prismaservice.pospects.count({
        where: {
          status : "2"
        },
      });
      return { nouveau: data, nrp : dataNRP };
    }

    async getIdOneProspect() {
      const data = await this.prismaservice.pospects.findFirst({
        where: {
          status: '0',
        },
        orderBy: {
          id: 'desc',
        },
        include: {
          agentpospect: true,
          capagnepospect: true,
          produitpospect: true,
        },
      });
    
      return { data };
    }

    async getIdOneProspectCampagne({ id }: { id: string }) {
      const data = await this.prismaservice.pospects.findFirst({
        where: {
           id_campagne: id,
           status: '0',
        },
        orderBy: {
          id: 'desc',
        },
        include: {
          agentpospect: true,
          capagnepospect: true,
          produitpospect: true,
        },
      });
    
      return { data : data};
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

    async updateNRP({ id }: { id: string }) {
      const update = await this.prismaservice.pospects.update({
        where: {
          id,
        },
        data: {
          status: "2"
        },
      });
      return {message  : 'prospect Ne repond pas', data : update};
    }

    async updateRDV({ id }: { id: string }) {
      const update = await this.prismaservice.pospects.update({
        where: {
          id,
        },
        data: {
          status: "1"
        },
      });
      return {message  : 'prospect rendez-vous' , data : update};
    }

    async updateNonValide({ id }: { id: string }) {
      const update = await this.prismaservice.pospects.update({
        where: {
          id,
        },
        data: {
          status: "3"
        },
      });
      return {message  : 'prospect Non valide', data : update};
    }

    async updatePasInteresse({ id }: { id: string }) {
      const update = await this.prismaservice.pospects.update({
        where: {
          id,
        },
        data: {
          status: "4"
        },
      });
      return {message  : 'prospect Pas intéressé', data : update};
    }

    async updateNPP({ id }: { id: string }) {
      const update = await this.prismaservice.pospects.update({
        where: {
          id,
        },
        data: {
          status: "5"
        },
      });
      return {message  : 'prospect N\'est pas appeller', data : update};
    }

    async updateMN({ id }: { id: string }) {
      const update = await this.prismaservice.pospects.update({
        where: {
          id,
        },
        data: {
          status: "6"
        },
      });
      return {message  : 'prospect Mauvais numero' , data : update};
    }

    async updateFL({ id }: { id: string }) {
      const update = await this.prismaservice.pospects.update({
        where: {
          id,
        },
        data: {
          status: "7"
        },
      });
      return {message  : 'prospect Faux lead' , data : update};
    }
  
    async delete({ id }: { id: string }) {
      await this.prismaservice.pospects.delete({
        where: {
          id,
        },
      });
      return { message: 'prospect supprimé avec success ' };
    }

    async create(applicationdto: PospectDto) {
        const createAgent = await this.prismaservice.pospects.create({
          data: applicationdto,
        });
        return createAgent;
    }
}
