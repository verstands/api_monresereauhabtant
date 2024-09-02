import { Injectable } from '@nestjs/common';
import { VilleDto } from 'src/dto/ville.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class VilleService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getVilles() {
    const application = await this.prismaservice.villes.findMany({});
    return { data: application };
  }

  async getVille({ id }: { id: string }) {
    const agenda = await this.prismaservice.villes.findUnique({
      where: {
        id: id,
      },
    });
    return { data: agenda };
  }

  async updateApplication({ id, ...data }: { id: string } & VilleDto) {
    const update = await this.prismaservice.villes.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return update;
  }

  async deleteVille({ id }: { id: string }) {
    await this.prismaservice.villes.delete({
      where: {
        id,
      },
    });
    return { message: 'villes supprimé avec success ' };
  }

  async create(applicationdto: VilleDto) {
    const createAgent = await this.prismaservice.villes.create({
      data: {
        nom: applicationdto.nom,
      },
    });
    return createAgent;
  }
}
