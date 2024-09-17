import { Injectable } from '@nestjs/common';
import { HistoriqueAffiche } from 'src/dto/HistoriqueAffiche';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class HistoriqueafficheService {
  constructor(private readonly prismaservice: PrismaService) {}

  async get({ prospect, user }: { prospect: string; user: string }) {
    const data = await this.prismaservice.historiqueAffiches.findMany({
      where: {
        userProspect: prospect,
        userAgent: user,
      },
      orderBy: {
        id: 'desc',
      },
    });
    return { data: data };
  }

  async getAdmin() {
    const data = await this.prismaservice.historiqueAffiches.findMany({
      orderBy: {
        id: 'desc',
      },
    });
    return { data: data };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.historiqueAffiches.findUnique({
      where: {
        id: id,
      },
    });
    return { data: data };
  }

  async delete({ id }: { id: string }) {
    await this.prismaservice.historiqueAffiches.delete({
      where: {
        id,
      },
    });
    return { message: 'fonction supprimé avec success ' };
  }

  async create(applicationdto: HistoriqueAffiche) {
    const createAgent = await this.prismaservice.historiqueAffiches.create({
      data: applicationdto,
    });
    return createAgent;
  }
}
