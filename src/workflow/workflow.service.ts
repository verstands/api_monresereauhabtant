import { Injectable } from '@nestjs/common';
import { WorkFlowDto } from 'src/dto/workflow.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WorkflowService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const application = await this.prismaservice.workflows.findMany({
        orderBy: {
          ordre: 'asc',
        },
        include: {
          etape: true, // Inclure les étapes
        },
        skip: 1,
      });
    
      // Transformer les données pour inclure le nombre d'étapes pour chaque workflow
      const workflowsWithEtapeCount = application.map((workflow) => ({
        ...workflow,
        etapeCount: workflow.etape.length, // Compter le nombre d'étapes
      }));
    
      return { data: workflowsWithEtapeCount };
    }
    

  async getid({ id }: { id: string }) {
    const agenda = await this.prismaservice.workflows.findUnique({
      where: {
        id: id,
      },
    });
    return { data: agenda };
  }

  async update({ id, ...data }: { id: string } & WorkFlowDto) {
    const update = await this.prismaservice.workflows.update({
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
    await this.prismaservice.workflows.delete({
      where: {
        id,
      },
    });
    return { message: 'villes supprimé avec success ' };
  }

  async create(dataall: WorkFlowDto) {
    const createAgent = await this.prismaservice.workflows.create({
      data:  dataall
    });
    return createAgent;
  }
}

