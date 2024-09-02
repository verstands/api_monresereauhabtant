import { Injectable } from '@nestjs/common';
import { RoleDto } from 'src/dto/role.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoleService {
  constructor(private readonly prismaservice: PrismaService) {}

  async get() {
    const data = await this.prismaservice.roles.findMany({});
    return { data: data };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.roles.findUnique({
      where: {
        id: id,
      },
    });
    return { data: data };
  }

  async update({ id, ...data }: { id: string } & RoleDto) {
    const update = await this.prismaservice.roles.update({
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
    await this.prismaservice.roles.delete({
      where: {
        id,
      },
    });
    return { message: 'nom supprimé avec success ' };
  }

  async create(applicationdto: RoleDto) {
    const create = await this.prismaservice.roles.create({
      data: {
        initule: applicationdto.initule,
      },
    });
    return create;
  }
}
