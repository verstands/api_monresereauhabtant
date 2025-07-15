import { Injectable } from '@nestjs/common';
import { group } from 'console';
import { CapamgneDto } from 'src/dto/campagne.dt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CapamgneService {
  constructor(private readonly prismaservice: PrismaService) { }


  async getcampagnes() {
    const campagnes = await this.prismaservice.capamgnes.findMany({
      orderBy: {
        id: 'desc',
      },
      include: {
        produit: {
          include: {
            work: {
              select: {
                id: true,
                libelle: true
              },
            },
          },
        },
        pospects: true,
      },
    });

    const campagnesWithProspectCount = campagnes.map(campagne => {
      const totalProspects = campagne.pospects.length;
      const prospectsWithStatusLead1 = campagne.pospects.filter(
        (prospect) => prospect.statuslead === '1'
      ).length;
      const prospectsWithStatusLead0 = campagne.pospects.filter(
        (prospect) => prospect.statuslead === '0'
      ).length;

      return {
        id: campagne.id,
        titre: campagne.titre,
        id_produit: campagne.id_produit,
        produit: campagne.produit,
        statut: campagne.statut,
        totalProspects: totalProspects,
        statusLead1Count: prospectsWithStatusLead1,
        statusLead0Count: prospectsWithStatusLead0,
      };
    });

    return { data: campagnesWithProspectCount };
  }

  async getcampagnesAgent({ id }: { id: string }) {
    const campagnes = await this.prismaservice.capamgnes.findMany({
      where: {
        pospects: {
          some: {
            OR: [
              { id_user: id },
              { id_confirmateur: id }
            ]
          }
        }
      },
      orderBy: {
        id: 'desc',
      },
      include: {
        produit: true,
        pospects: true,
      },
    });

    const campagnesWithProspectCount = campagnes.map(campagne => {
      const totalProspects = campagne.pospects.length;
      const prospectsWithStatusLead1 = campagne.pospects.filter(
        (prospect) => prospect.statuslead === '1'
      ).length;
      const prospectsWithStatusLead0 = campagne.pospects.filter(
        (prospect) => prospect.statuslead === '0'
      ).length;

      return {
        id: campagne.id,
        titre: campagne.titre,
        id_produit: campagne.id_produit,
        produit: campagne.produit,
        statut: campagne.statut,
        totalProspects: totalProspects,
        statusLead1Count: prospectsWithStatusLead1,
        statusLead0Count: prospectsWithStatusLead0,
      };
    });

    return { data: campagnesWithProspectCount };
  }




  async getcampagne({ id }: { id: string }) {
    const campagne = await this.prismaservice.capamgnes.findUnique({
      where: {
        id: id,
      },

      include: {
        produit: {
          include: {
            work: {
              select: {
                id: true,
                libelle: true
              },
            },
          },
        },
        groupe: true
      }
    });
    const campagneuser = await this.prismaservice.groupeUser.findMany({
      where: {
        id_groupe: campagne.idgroupe,
      },
      include: {
        agentgroupe: true,
      }
    })
    return { data: campagne, datauser: campagneuser };
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
