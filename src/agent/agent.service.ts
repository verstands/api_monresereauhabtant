import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AgentService {
  constructor(private readonly prismaservice: PrismaService) {}

  async getAgents() {
    const agents = await this.prismaservice.agents.findMany({
      select: {
        id: true,
        nom: true,
        prenom: true,
        statut: true,
        email: true,
      },
    });
    return agents;
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
    return agent;
  }
}
