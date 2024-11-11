import { Injectable } from '@nestjs/common';
import { GroupeDto } from 'src/dto/grouoe.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GroupeService {
    constructor(private readonly prismaservice: PrismaService
    ) {}

    async get() {
      const data = await this.prismaservice.groupes.findMany({
        orderBy:{
            "id" : "desc"
        },
      });
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.groupes.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & GroupeDto) {
      const update = await this.prismaservice.groupes.update({
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
      await this.prismaservice.groupes.delete({
        where: {
          id,
        },
      });
      return { message: 'groupe supprimé avec success ' };
    }

    async create(applicationdto: GroupeDto) {
        const createAgent = await this.prismaservice.groupes.create({
          data: applicationdto,
        });
        return createAgent;
    }
}
