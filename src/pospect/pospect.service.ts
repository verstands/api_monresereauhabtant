import { Injectable } from '@nestjs/common';
import { PospectDto } from 'src/dto/pospect.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PospectService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.pospects.findMany({
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
      return {message  : 'prospect Ne repond pas'};
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
      return {message  : 'prospect rendez-vous'};
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
      return {message  : 'prospect Non valide'};
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
      return {message  : 'prospect Pas intéressé'};
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
      return {message  : 'prospect N\'est pas appeller'};
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
      return {message  : 'prospect Mauvais numero'};
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
      return {message  : 'prospect Faux lead'};
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
