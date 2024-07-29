import { Injectable } from '@nestjs/common';
import { AgendaDto } from 'src/dto/agenda.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AgendaService {
  constructor(private readonly prismaservice: PrismaService) {}

  async getAgendas() {
    const agenda = await this.prismaservice.agendas.findMany({
      include: {
        agents: true,
        pospect : true 
      },
    });
    return { data: agenda };
  }

  async getAgenda({ id }: { id: string }) {
    const agenda = await this.prismaservice.agendas.findUnique({
      where: {
        id: id,
      },
      include: {
        agents: true,
      },
    });
    return { data: agenda };
  }

  async updateAgenda({ id, ...data }: { id: string } & AgendaDto) {
    const update = await this.prismaservice.agendas.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return update;
  }

  async deleteAgenda({ id }: { id: string }) {
    await this.prismaservice.agendas.delete({
      where: {
        id,
      },
    });
    return { message: 'Agenda supprimé avec success ' };
  }

  async create(agendadto: AgendaDto) {
    const createAgent = await this.prismaservice.agendas.create({
      data: agendadto
    });
    return createAgent;
  }
}
