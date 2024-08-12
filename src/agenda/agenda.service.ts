import { Injectable } from '@nestjs/common';
import { AgendaDto } from 'src/dto/agenda.dto';
import { NotificationGateway } from 'src/notification/notification.gateway';
import { PrismaService } from 'src/prisma.service';
import * as cron from 'node-cron';

@Injectable()
export class AgendaService {
  constructor(
    private readonly prismaservice: PrismaService,
    private readonly notificationGateway: NotificationGateway,
  ) {
    this.scheduleNotifications();
  }
  

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

  private scheduleNotifications() {
    cron.schedule('* * * * *', async () => {
      const agendas = await this.prismaservice.agendas.findMany({ 
         include : {
          pospect: true,
         }
      });
      const now = new Date();
  
      agendas.forEach((agenda) => {
        const startTime = new Date(agenda.start);
        const notificationTime = new Date(startTime.getTime() - 5 * 60000);
  
        if (now >= notificationTime && now < startTime) {
          this.notificationGateway.sendNotification({
            title: `Rappel d'événement`,
            description: `L'événement ${agenda.title} pour ${agenda.pospect.nom} est prévu pour ${startTime.toLocaleTimeString()}. véfirie votre agenda `,
            id: agenda.pospect.id
          });
        }
      });
    });
  }


}
