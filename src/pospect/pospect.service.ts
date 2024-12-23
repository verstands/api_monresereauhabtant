import { Injectable } from '@nestjs/common';
import { PaginationDto } from 'src/dto/paginationPage.dto';
import { PospectDto } from 'src/dto/pospect.dto';
import { PrismaService } from 'src/prisma.service';
import { DEFAULT_PAGE_SIZE } from 'utils/constants';

@Injectable()
export class PospectService {
  constructor(private readonly prismaservice: PrismaService) { }

  async get(paginationdto: PaginationDto) {
    const data = await this.prismaservice.pospects.findMany({
      where: {
        statuslead: "0",
      },
      orderBy: {
        "id": "desc"
      },
      include: {
        agentpospect: true,
        capagnepospect: true,
        produitpospect: true,
        statutp: true,
      },
      skip: Number(paginationdto.skip), 
      take: Number(paginationdto.limit) ?? DEFAULT_PAGE_SIZE,
    });
    return { data: data };
  }

  async getSuiviLead() {
    const data = await this.prismaservice.pospects.findMany({
      orderBy: {
        "id": "desc"
      },
      include: {
        agentpospect: true,
        capagnepospect: true,
        produitpospect: true,
        statutp: true,

      }
    });
    console.log('dataaaaaaaaaaaaa',)
    return { data: data };
  }

  async getAgent({ id }: { id: string }) {
    const data = await this.prismaservice.pospects.findMany({
      where: {
        id_user: id,
        statuslead: "0"
      },
      orderBy: {
        "id": "desc"
      },
      include: {
        agentpospect: true,
        capagnepospect: true,
        produitpospect: true,
        statutp: true,
      }
    });
    return { data: data };
  }

  async getSuiviLeadAgent({ id }: { id: string }) {
    const data = await this.prismaservice.pospects.findMany({
      where: {
        id_user: id,
        statuslead: {
           not : "0"
        },
      },
      orderBy: {
        "id": "desc"
      },
      include: {
        agentpospect: true,
        capagnepospect: true,
        produitpospect: true,
        statutp: true,

      }
    });
    return { data: data };
  }


  async getcountNouveau({ id }: { id: string }) {
    const data = await this.prismaservice.pospects.count({
      where: {
        statuslead: "0"
      },
    });

    const leadagent = await this.prismaservice.pospects.count({
      where: {
        OR: [
          { id_user: id },
          { 
            id_confirmateur: id, 
            statuslead : "1" 
          }
        ]
      }
    });

    const leadagentNRP = await this.prismaservice.pospects.count({
      where: {
        id_user: id,
      },
    });

    const dataNRP = await this.prismaservice.pospects.count({
      where: {
        status: "2"
      },
    });

    return { nouveau: data, nrp: dataNRP, leadagent: leadagent,  };
  }

  async getIdOneProspect() {
    const data = await this.prismaservice.pospects.findFirst({
      where: {
        statuslead: '0',
      },
      orderBy: {
        id: 'desc',
      },
      include: {
        agentpospect: true,
        capagnepospect: true,
        produitpospect: {
          include: {
            work: true,
          }
        }
      },
    });

    return { data };
  }

  async getIdOneProspects(id: string) {
    const data = await this.prismaservice.pospects.findFirst({
      where: {
        statuslead: '0',
        id_user: id
      },
      orderBy: {
        id: 'desc',
      },
      include: {
        agentpospect: true,
        capagnepospect: true,
        produitpospect: {
          include: {
            work: true,
          }
        }
      },
    });

    return { data };
  }

  async getIdOneProspectCampagne({ id }: { id: string }) {
    const data = await this.prismaservice.pospects.findFirst({
      where: {
        id_campagne: id,
        statuslead: '0',
      },
      orderBy: {
        id: 'desc',
      },
      include: {
        agentpospect: true,
        capagnepospect: true,
        produitpospect: {
          include: {
            work: true,
          }
        }
      },
    });

    return { data: data };
  }

  async getIdOneProspectCampagneId({ id, id_user }: { id: string, id_user: string }) {
    const data = await this.prismaservice.pospects.findFirst({
      where: {
        id_campagne: id,
        id_user: id_user,
        statuslead: '0',
      },
      orderBy: {
        id: 'desc',
      },
      include: {
        agentpospect: true,
        capagnepospect: true,
        produitpospect: {
          include: {
            work: true,
          }
        }
      },
    });

    return { data: data };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.pospects.findUnique({
      where: {
        id: id,
      },
      include: {
        agentpospect: true,
        capagnepospect: true,
        produitpospect: {
          include: {
            work: true,
          }
        }
      }
    });
    return { data: data };
  }

  async update({ id, ...data }: { id: string } & PospectDto) {
    const update = await this.prismaservice.pospects.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });

    return update;
  }


  async updateNRP({ id, idstatut }: { id: string, idstatut: string }) {
    const update = await this.prismaservice.pospects.update({
      where: {
        id,
      },
      data: {
        status: idstatut,
        statuslead: '1',
      },
    });
    return { message: 'prospect Ne repond pas', data: update };
  }

  async updateRDV({ id }: { id: string }) {
    const update = await this.prismaservice.pospects.update({
      where: {
        id,
      },
      data: {
        status: "1"
      },
    });
    return { message: 'prospect rendez-vous', data: update };
  }

  async updateNonValide({ id }: { id: string }) {
    const update = await this.prismaservice.pospects.update({
      where: {
        id,
      },
      data: {
        status: "3"
      },
    });
    return { message: 'prospect Non valide', data: update };
  }

  async updatePasInteresse({ id }: { id: string }) {
    const update = await this.prismaservice.pospects.update({
      where: {
        id,
      },
      data: {
        status: "4"
      },
    });
    return { message: 'prospect Pas intéressé', data: update };
  }

  async updateNPP({ id }: { id: string }) {
    const update = await this.prismaservice.pospects.update({
      where: {
        id,
      },
      data: {
        status: "5"
      },
    });
    return { message: 'prospect N\'est pas appeller', data: update };
  }

  async updateMN({ id }: { id: string }) {
    const update = await this.prismaservice.pospects.update({
      where: {
        id,
      },
      data: {
        status: "6"
      },
    });
    return { message: 'prospect Mauvais numero', data: update };
  }

  async updateFL({ id }: { id: string }) {
    const update = await this.prismaservice.pospects.update({
      where: {
        id,
      },
      data: {
        status: "7"
      },
    });
    return { message: 'prospect Faux lead', data: update };
  }

  async delete({ id }: { id: string }) {
    await this.prismaservice.pospects.delete({
      where: {
        id,
      },
    });
    return { message: 'prospect supprimé avec success ' };
  }

  async create(applicationdto: PospectDto) {
    const createAgent = await this.prismaservice.pospects.create({
      data: applicationdto,
    });
    return createAgent;
  }

  async getCountStatusByCampagne(id: string) {
    const prospectsByStatus = await this.prismaservice.pospects.groupBy({
      by: ['status'],
      where: {
        id_campagne: id,
      },
      _count: {
        id: true,
      },
    });
    const statusCounts = await Promise.all(prospectsByStatus.map(async (statusCount) => {
      const status = await this.prismaservice.status.findUnique({
        where: { id: statusCount.status },
      });

      return {
        statusName: status?.libelle || 'Inconnu',
        statusColor: status?.couleur || 'Inconnu',
        statusid: status?.id || 'Inconnu',
        count: statusCount._count.id,
      };
    }));

    return { data: statusCounts };
  }

}
