import { Injectable } from '@nestjs/common';
import { ModeleMailDto } from 'src/dto/mailmodele.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ModelmailService {
  constructor(private readonly prismaservice: PrismaService) {}

  async get() {
    const data = await this.prismaservice.modelmail.findMany({
      orderBy: {
        id: 'desc',
      },
      include: {
        capagnemodel: true,
        fonctionmodel: true,
      },
    });
    return { data: data };
  }

  async getMail(id_campagne: string, id_fonction: string) {
    const data = await this.prismaservice.modelmail.findMany({
      where: {
        id_campagne: id_campagne,
        id_fonction: id_fonction,
      },
      orderBy: {
        id: 'desc',
      },
      include: {
        capagnemodel: true,
        fonctionmodel: true,
      },
    });
    return { data: data };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.modelmail.findUnique({
      where: {
        id: id,
      },
      include: {
        capagnemodel: true,
        fonctionmodel: true,
      },
    });
    return { data: data };
  }

  async update({ id, ...data }: { id: string } & ModeleMailDto) {
    const update = await this.prismaservice.modelmail.update({
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
    await this.prismaservice.modelmail.delete({
      where: {
        id,
      },
    });
    return { message: 'model mail supprimÃ©e avec success ' };
  }

  async create(dataEn: ModeleMailDto) {
    const createAgent = await this.prismaservice.modelmail.create({
      data: dataEn,
    });
    return createAgent;
  }
}
