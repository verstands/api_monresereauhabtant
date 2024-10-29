import { Injectable } from '@nestjs/common';
import { EtapeWorkFlowDto } from 'src/dto/etapeworkflowdto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class EtapeworkflowService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.etapeWorkflows.findMany({
        skip: 1, 
        orderBy:{
            "id" : "asc"
        },
      });
      return { data: data };
    }

    async getworkflowetape() {
      const data = await this.prismaservice.workflows.findMany({
        skip: 1,
        orderBy: {
          id: "asc",
        },
        include: {
          etape: {
            include: {
              CategorieWorkflows: true, // Inclure les catégories dans chaque étape
            },
          },
        },
      });
    
      // Transformer les données pour inclure le nombre réel de catégories
      const workflowsWithCategoryCount = data.map((workflow) => {
        const etapesWithCategoryCount = workflow.etape.map((etape) => ({
          ...etape,
          categoryCount: etape.CategorieWorkflows.length, // Compter le nombre réel de catégories
        }));
    
        return {
          ...workflow,
          etape: etapesWithCategoryCount,
        };
      });
    
      return { data: workflowsWithCategoryCount };
    }
    
    

    async getCat() {
      const data = await this.prismaservice.etapeWorkflows.findMany({
        skip: 1, 
        orderBy:{
            "id" : "asc"
        },
        include : {
          CategorieWorkflows : true,
        }
      });
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.etapeWorkflows.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }

    async getWorkflow({ id }: { id: string }) {
      const data = await this.prismaservice.etapeWorkflows.findMany({
        where: {
          id_work : id
        },
      });
      return { data: data };
    }
  
  
    async update({ id, ...data }: { id: string } & EtapeWorkFlowDto) {
      const update = await this.prismaservice.etapeWorkflows.update({
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
      await this.prismaservice.etapeWorkflows.delete({
        where: {
          id,
        },
      });
      return { message: 'fonction supprimé avec success ' };
    }

    async create(applicationdto: EtapeWorkFlowDto) {
        const createAgent = await this.prismaservice.etapeWorkflows.create({
          data: applicationdto,
        });
        return createAgent;
    }
}
