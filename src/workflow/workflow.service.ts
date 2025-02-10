import { Injectable } from '@nestjs/common';
import { WorkFlowDto } from 'src/dto/workflow.dto';
import { WorkflowInterface } from 'src/interface/WorkflowIterface';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WorkflowService {
  constructor(private readonly prismaservice: PrismaService) { }

  async get() {
    // Récupérer les enregistrements en ignorant celui avec l'ID spécifique
    const application = await this.prismaservice.workflows.findMany({
      where: {
        NOT: {
          id: "cm0v2ftr50009124suxegkexs", // Remplacez "id1" par l'ID que vous voulez ignorer
        },
      },
      orderBy: {
        ordre: 'asc', // Tri croissant par le champ 'ordre'
      },
      include: {
        etape: true, // Inclure les relations avec 'etape'
      },
    });

    // Ajouter un compteur des étapes pour chaque workflow
    const workflowsWithEtapeCount = application.map((workflow) => ({
      ...workflow,
      etapeCount: workflow.etape.length,
    }));

    return { data: workflowsWithEtapeCount };
  }


  async getAgent(id: string) {
    const application = await this.prismaservice.workflows.findMany({
      where: {
        etape: {
          some: {
            CatgorieRole: {
              some: {
                id_role: id
              }
            }
          }
        },
      },
      orderBy: {
        ordre: 'asc',
      },
      include: {
        etape: true,
      },
      skip: 1,
    });

    return { data: application };
  }




  async getid({ id }: { id: string }) {
    const agenda = await this.prismaservice.workflows.findUnique({
      where: {
        id: id,
      },
    });
    return { data: agenda };
  }

  async update({ id, ...data }: { id: string } & WorkflowInterface) {
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
      data: dataall
    });
    return createAgent;
  }
}

