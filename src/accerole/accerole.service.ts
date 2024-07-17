import { Injectable } from '@nestjs/common';
import { AccesRoleDto } from 'src/dto/accerole.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AcceroleService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.accesroles.findMany({
        orderBy: {
            id: 'desc'
          },
        include: {
            role: true,
            agentrole: true
          }
      },
    );
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.accesroles.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & AccesRoleDto) {
      const update = await this.prismaservice.accesroles.update({
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
      await this.prismaservice.accesroles.delete({
        where: {
          id,
        },
      });
      return { message: 'role supprimé avec success ' };
    }
  
    async create(applicationdto: AccesRoleDto) {
      const create = await this.prismaservice.accesroles.create({
        data: {
          id_role: applicationdto.id_role,
          id_user: applicationdto.id_user,
        },
      });
      return create;
    }
}
