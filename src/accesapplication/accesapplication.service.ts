import { Injectable } from '@nestjs/common';
import { AccesApplicationDto } from 'src/dto/accesapplication';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AccesapplicationService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getAccesApplications() {
    const application = await this.prismaservice.accesapplications.findMany({
      orderBy : {
         id : "desc"
      },
      include : {
        agents : true,
        application : true
      }
    });
    return { data: application };
  }

  async getAccesApplication({ id }: { id: string }) {
    const agenda = await this.prismaservice.accesapplications.findUnique({
      where: {
        id: id,
      },
    });
    return { data: agenda };
  }

  async updateApplication({ id, ...data }: { id: string } & AccesApplicationDto) {
    const update = await this.prismaservice.accesapplications.update({
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
    await this.prismaservice.accesapplications.delete({
      where: {
        id,
      },
    });
    return { message: 'Acces de l\'application supprimé avec success ' };
  }

  async create(campagnedto: AccesApplicationDto) {
    const createAgent = await this.prismaservice.accesapplications.create({
      data: {
        id_user:  campagnedto.id_user,
        id_application: campagnedto.id_application
      },
    });
    return createAgent;
  }
}
