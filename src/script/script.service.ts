import { Injectable } from '@nestjs/common';
import { ScriptDto } from 'src/dto/script.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ScriptService {
  constructor(private readonly prismaservice: PrismaService) {}

  async get() {
    const data = await this.prismaservice.scripts.findMany({
      orderBy: {
        id: 'desc',
      },
      include: {
        id_produit: true,
      },
    });
    return { data: data };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.scripts.findUnique({
      where: {
        id: id,
      },
    });
    return { data: data };
  }

  async getIdProduit({ id_produit }: { id_produit: string }) {
    const data = await this.prismaservice.scripts.findMany({
      where: {
        position: id_produit,
      },
      include: {
        id_produit: true,
      },
    });
    return { data: data };
  }

  async update({ id, ...data }: { id: string } & ScriptDto) {
    const update = await this.prismaservice.scripts.update({
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
    await this.prismaservice.scripts.delete({
      where: {
        id,
      },
    });
    return { message: 'role supprimé avec success ' };
  }

  async create(applicationdto: ScriptDto) {
    const create = await this.prismaservice.scripts.create({
      data: applicationdto,
    });
    return create;
  }
}
