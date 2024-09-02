import { Injectable } from '@nestjs/common';
import { InstallateurDto } from 'src/dto/installateur.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class InstallateurService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.installateurs.findMany({});
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.installateurs.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & InstallateurDto) {
      const update = await this.prismaservice.installateurs.update({
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
      await this.prismaservice.installateurs.delete({
        where: {
          id,
        },
      });
      return { message: 'nom supprimé avec success ' };
    }
  
    async create(applicationdto: InstallateurDto) {
      const create = await this.prismaservice.installateurs.create({
        data: {
          nom: applicationdto.nom,
        },
      });
      return create;
    }
}
