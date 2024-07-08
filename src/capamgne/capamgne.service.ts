import { Injectable } from '@nestjs/common';
import { CapamgneDto } from 'src/dto/campagne.dt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CapamgneService {
  constructor(private readonly prismaservice: PrismaService) {}

  async getcampagnes() {
    const campagne = await this.prismaservice.capamgnes.findMany({});
    return { data: campagne };
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
      data: {
        titre:  campagnedto.titre,
        file: campagnedto.file
      },
    });
    return createAgent;
  }
}
