import { Injectable } from '@nestjs/common';
import { StatusDto } from 'src/dto/statut.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StatusService {
  constructor(private readonly prismaservice: PrismaService) { }

  async getSatus() {
    const application = await this.prismaservice.status.findMany({});
    return { data: application };
  }

  async getStatu({ id }: { id: string }) {
    const agenda = await this.prismaservice.status.findUnique({
      where: {
        id: id,
      },
    });
    return { data: agenda };
  }

  async getCategorie({ id }: { id: string }) {
    const data = await this.prismaservice.status.findMany({
      where: {
        idcategorie: id,
      },
    });
    return { data: data };
  }

  async updateSatus({ id, ...data }: { id: string } & StatusDto) {
    const update = await this.prismaservice.status.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return update;
  }

  async deleteStatus({ id }: { id: string }) {
    await this.prismaservice.status.delete({
      where: {
        id,
      },
    });
    return { message: 'nom supprimé avec success ' };
  }

  async create(dataS: StatusDto) {
    const createAgent = await this.prismaservice.status.create({
      data: dataS
    });
    return createAgent;
  }

  async viewstattuCampagne(id_campagne: string) {
    const data = await this.prismaservice.status.findMany({
      orderBy: {
        "id": "desc"
      },
      include: {
        Pospects: true
      },
    });
    return { data: data };
  }
}
