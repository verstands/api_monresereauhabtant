import { Injectable } from '@nestjs/common';
import { CapamgneDto } from 'src/dto/campagne.dt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CapamgneService {
  constructor(private readonly prismaservice: PrismaService) {}

  
  async getcampagnes() {
    const campagnes = await this.prismaservice.capamgnes.findMany({
      orderBy: {
        id: 'desc',
      },
      include: {
        produit: true,
      },
    });
  
    const campagnesWithStatusCounts = await Promise.all(
      campagnes.map(async (campagne) => {
        const status1Count = await this.prismaservice.pospects.count({
          where: {
            id_campagne: campagne.id,
            status: '1',
          },
        });
  
        const status2Count = await this.prismaservice.pospects.count({
          where: {
            id_campagne: campagne.id,
            status: '2',
          },
        });
  
        const status3Count = await this.prismaservice.pospects.count({
          where: {
            id_campagne: campagne.id,
            status: '3',
          },
        });

        const status4Count = await this.prismaservice.pospects.count({
          where: {
            id_campagne: campagne.id,
            status: '4',
          },
        });

        const status5Count = await this.prismaservice.pospects.count({
          where: {
            id_campagne: campagne.id,
            status: '5',
          },
        });

        const status6Count = await this.prismaservice.pospects.count({
          where: {
            id_campagne: campagne.id,
            status: '6',
          },
        });

        const status7Count = await this.prismaservice.pospects.count({
          where: {
            id_campagne: campagne.id,
            status: '7',
          },
        });
  
        return {
          ...campagne,
          statusCounts: {
            status1: status1Count,
            status2: status2Count,
            status3: status3Count,
            status4: status4Count,
            status5: status5Count,
            status6: status6Count,
            status7: status7Count,
          },
        };
      })
    );
  
    return { data: campagnesWithStatusCounts };
  }
  

  async getcampagne({ id }: { id: string }) {
    const campagne = await this.prismaservice.capamgnes.findUnique({
      where: {
        id: id,
      },
    });
    return { data: campagne };
  }

  async updateCampagne({ id, ...data }: { id: string } & CapamgneDto) {
    const update = await this.prismaservice.capamgnes.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return update;
  }

  async deleteCampagne({ id }: { id: string }) {
    await this.prismaservice.capamgnes.delete({
      where: {
        id,
      },
    });
    return { message: 'Campgna supprimé avec success ' };
  }

  async create(campagnedto: CapamgneDto) {
    const createAgent = await this.prismaservice.capamgnes.create({
      data: campagnedto,
    });
    return createAgent;
  }
}
