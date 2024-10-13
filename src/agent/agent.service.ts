import { Injectable } from '@nestjs/common';
import { AgentInterface } from 'src/dto/agent.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AgentService {
  constructor(private readonly prismaservice: PrismaService) {}

  async getAgents() {
    const agents = await this.prismaservice.agents.findMany({
      
      orderBy : {
        id : "desc"
      },
      include : {
        fonction : true
      }
    });
    return { data: agents };
  }

  async getAgent({ id }: { id: string }) {
    const agent = await this.prismaservice.agents.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        nom: true,
        prenom: true,
        statut: true,
        email: true,
      },
    });
    return { data: agent };
  }

  async updateAgent({ id, ...agentUpdate }: { id: string } & AgentInterface) {
    const updatedAgent = await this.prismaservice.agents.update({
      where: {
        id,
      },
      data: {
        ...agentUpdate,
      },
    });
    return updatedAgent;
  }

  async deleteAgent({ id }: { id: string }) {
    //await this.prismaservice.fonctions.deleteMany({
      // where : {
       // agents : id
       //}
    //})
    await this.prismaservice.agents.delete({
      where: {
        id,
      },
    });
    return { message: 'Agent supprimé avec success ' };
  }

  async getAgentsByFonctions(fonctionIds: number[] | string[]) {
    const agents = await this.prismaservice.agents.findMany({
      where: {
        id: {
          in: fonctionIds.map(String),
        },  
      },
      include: {
        fonction: true, 
      },
    });
    return { data: agents };
  }
}
