import { Injectable } from '@nestjs/common';
import { CategorieWorkFlowDto } from 'src/dto/categorieworkflow';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CategorieworkflowService {
  constructor(private readonly prismaservice: PrismaService) {}

  async get() {
    const data = await this.prismaservice.categorieWorkflows.findMany({
      orderBy: {
        id: 'desc',
      },
      include : {
          workflow : true
      }
    });
    return { data: data };
  }

  async getCat() {
    const data = await this.prismaservice.etapeWorkflows.findMany({
      orderBy: {
        id: 'desc',
      },
     
    });
    return { data: data };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.categorieWorkflows.findUnique({
      where: {
        id: id,
      },
    });
    return { data: data };
  }

  async getEtape({ id }: { id: string }) {
    const data = await this.prismaservice.categorieWorkflows.findMany({
      where: {
        idetape: id,
      },
    });
    return { data: data };
  }

  async update({ id, ...data }: { id: string } & CategorieWorkFlowDto) {
    const update = await this.prismaservice.categorieWorkflows.update({
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
    await this.prismaservice.categorieWorkflows.delete({
      where: {
        id,
      },
    });
    return { message: 'fonction supprimé avec success ' };
  }

  async create(applicationdto: CategorieWorkFlowDto) {
    const createAgent = await this.prismaservice.categorieWorkflows.create({
      data: applicationdto,
    });
    return createAgent;
  }
}
