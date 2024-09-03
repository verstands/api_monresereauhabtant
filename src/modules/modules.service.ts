import { Injectable } from '@nestjs/common';
import { ModuleDto } from 'src/dto/module.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ModulesService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.modules.findMany({
        orderBy: {
          id : 'desc'
        },
      });
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.modules.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & ModuleDto) {
      const update = await this.prismaservice.modules.update({
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
  
    async create(applicationdto: ModuleDto) {
      const create = await this.prismaservice.modules.create({
        data: applicationdto
      });
      return create;
    }
}
