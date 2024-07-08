import { Injectable } from '@nestjs/common';
import { TypechauffageDto } from 'src/dto/typechauffage.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TypechauffageService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getTypechauffages() {
    const application = await this.prismaservice.typeChauffages.findMany({});
    return { data: application };
  }

  async getTypechauffage({ id }: { id: string }) {
    const agenda = await this.prismaservice.typeChauffages.findUnique({
      where: {
        id: id,
      },
    });
    return { data: agenda };
  }

  async updateTypechauffage({ id, ...data }: { id: string } & TypechauffageDto) {
    const update = await this.prismaservice.typeChauffages.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return update;
  }

  async deleteTypechauffage({ id }: { id: string }) {
    await this.prismaservice.typeChauffages.delete({
      where: {
        id,
      },
    });
    return { message: 'nom supprimé avec success ' };
  }

  async create(applicationdto: TypechauffageDto) {
    const createAgent = await this.prismaservice.typeChauffages.create({
      data: {
        intitule: applicationdto.intitule,
      },
    });
    return createAgent;
  }
}
