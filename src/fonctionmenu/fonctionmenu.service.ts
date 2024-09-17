import { Injectable } from '@nestjs/common';
import { FonctionMenuDto } from 'src/dto/FonctionMenu.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FonctionmenuService {
  constructor(private readonly prismaservice: PrismaService) {}

  async get() {
    const data = await this.prismaservice.fonctionMenu.findMany({
      orderBy: {
        id: 'desc',
      },
      include: {
        fonction: true,
        menu: true,
      },
    });
    return { data: data };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.fonctionMenu.findUnique({
      where: {
        id: id,
      },
    });
    return { data: data };
  }

  async update({ id, ...data }: { id: string } & FonctionMenuDto) {
    const update = await this.prismaservice.fonctionMenu.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return update;
  }

  async getFontionMenu({ id }: { id: string }) {
    const data = await this.prismaservice.fonctionMenu.findMany({
      where: {
        idfonction: id,
      },
      include : {
        fonction : true,
        menu : true
      }
    });
    return { data: data };
  }

  async delete({ id }: { id: string }) {
    await this.prismaservice.fonctionMenu.delete({
      where: {
        id,
      },
      include : {
        menu : true,
        fonction : true
      }
    });
    return { message: 'fonction supprimé avec success ' };
  }

  async create(applicationdto: FonctionMenuDto) {
    const createAgent = await this.prismaservice.fonctionMenu.create({
      data: applicationdto,
    });
    return createAgent;
  }
}
