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

    async create(applicationdto: PospectDto) {
        const createAgent = await this.prismaservice.pospects.create({
          data: applicationdto,
        });
        return createAgent;
    }
}
