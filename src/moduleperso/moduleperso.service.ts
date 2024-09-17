import { Injectable } from '@nestjs/common';
import { ModulePersoDto } from 'src/dto/moduleperso.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ModulepersoService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.modulePerso.findMany({
        orderBy: {
          id : 'desc'
        }
      });
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.modulePerso.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & ModulePersoDto) {
      const update = await this.prismaservice.modulePerso.update({
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
      await this.prismaservice.modules.delete({
        where: {
          id,
        },
      });
      return { message: 'nom supprimé avec success ' };
    }
  
    async create(applicationdto: ModulePersoDto) {
      const create = await this.prismaservice.modulePerso.create({
        data: applicationdto
      });
      return create;
    }
}
