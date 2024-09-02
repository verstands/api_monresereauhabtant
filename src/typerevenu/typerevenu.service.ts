import { Injectable } from '@nestjs/common';
import { TypeRevenuDto } from 'src/dto/typerevenu.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TyperevenuService {
    constructor(private readonly prismaservice: PrismaService) {}

  async getTyperevenus() {
    const application = await this.prismaservice.typeRevenus.findMany({});
    return { data: application };
  }

  async getTyperevenu({ id }: { id: string }) {
    const agenda = await this.prismaservice.typeRevenus.findUnique({
      where: {
        id: id,
      },
    });
    return { data: agenda };
  }

  async updateTyperevenu({ id, ...data }: { id: string } & TypeRevenuDto) {
    const update = await this.prismaservice.typeRevenus.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });
    return update;
  }

  async deleteTyperevenu({ id }: { id: string }) {
    await this.prismaservice.typeRevenus.delete({
      where: {
        id,
      },
    });
    return { message: 'nom supprimé avec success ' };
  }

  async create(applicationdto: TypeRevenuDto) {
    const createAgent = await this.prismaservice.typeRevenus.create({
      data: {
        intitule: applicationdto.intitule,
      },
    });
    return createAgent;
  }
}
