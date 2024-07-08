import { Injectable } from '@nestjs/common';
import { ProvenanceDto } from 'src/dto/provanance.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProvenanceService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.provenances.findMany({});
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.provenances.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & ProvenanceDto) {
      const update = await this.prismaservice.provenances.update({
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
      await this.prismaservice.provenances.delete({
        where: {
          id,
        },
      });
      return { message: 'nom supprimé avec success ' };
    }
  
    async create(applicationdto: ProvenanceDto) {
      const create = await this.prismaservice.provenances.create({
        data: {
          nom: applicationdto.nom,
        },
      });
      return create;
    }
}
