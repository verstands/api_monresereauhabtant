import { Injectable } from '@nestjs/common';
import { CategorieRoleDto } from 'src/dto/categorierole.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategorieroleService {
    constructor(private readonly prismaservice: PrismaService) {}

  async get() {
    const data = await this.prismaservice.catgorieRole.findMany({
      orderBy: {
        id: 'desc',
      },
    });
    return { data: data };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.catgorieRole.findUnique({
      where: {
        id: id,
      },
    });
    return { data: data };
  }

  async getCategorieRole({ id }: { id: string }) {
    const data = await this.prismaservice.catgorieRole.findMany({
      where: {
        id_role: id,
      },
      include : {
        role : true,
<<<<<<< HEAD
        categorie : true, 
=======
        categorie : true,
>>>>>>> b618e5f (ddelo)
      }
    });
    return { data: data };
  }

  async update({ id, ...data }: { id: string } & CategorieRoleDto) {
    const update = await this.prismaservice.catgorieRole.update({
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
    await this.prismaservice.catgorieRole.delete({
      where: {
        id,
      },
    });
    return { message: 'fonction supprimé avec success ' };
  }

  async create(applicationdto: CategorieRoleDto) {
    const createAgent = await this.prismaservice.catgorieRole.create({
      data: applicationdto,
    });
    return createAgent;
  }
}
