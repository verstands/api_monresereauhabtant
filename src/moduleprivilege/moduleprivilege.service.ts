import { Injectable } from '@nestjs/common';
import { ModulePrivilegeDto } from 'src/dto/moduleprivilege.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ModuleprivilegeService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.modulesPrivilege.findMany({
        orderBy: {
          id : 'desc'
        }
      });
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.modulesPrivilege.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & ModulePrivilegeDto) {
      const update = await this.prismaservice.modulesPrivilege.update({
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
      await this.prismaservice.modulesPrivilege.delete({
        where: {
          id,
        },
      });
      return { message: 'nom supprimé avec success ' };
    }
  
    async create(applicationdto: ModulePrivilegeDto) {
      const create = await this.prismaservice.modulesPrivilege.create({
        data: applicationdto
      });
      return create;
    }
}
