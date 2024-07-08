import { Injectable } from '@nestjs/common';
import { ApplicationDto } from 'src/dto/application.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ApplicationService {
  constructor(private readonly prismaservice: PrismaService) {}

  async getApplications() {
    const application = await this.prismaservice.applications.findMany({});
    return { data: application };
  }

  async getApplication({ id }: { id: string }) {
    const agenda = await this.prismaservice.applications.findUnique({
      where: {
        id: id,
      },
    });
    return { data: agenda };
  }

  async updateApplication({ id, ...data }: { id: string } & ApplicationDto) {
    const update = await this.prismaservice.applications.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return update;
  }

  async deleteApplication({ id }: { id: string }) {
    await this.prismaservice.applications.delete({
      where: {
        id,
      },
    });
    return { message: 'Application supprimé avec success ' };
  }

  async create(applicationdto: ApplicationDto) {
    const createAgent = await this.prismaservice.applications.create({
      data: {
        titre: applicationdto.titre,
        image: applicationdto.image,
        lien: applicationdto.lien
      },
    });
    return createAgent;
  }
}
