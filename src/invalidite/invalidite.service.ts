import { Injectable } from '@nestjs/common';
import { InvaliditeDto } from 'src/dto/Ivalidite.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class InvaliditeService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.invalidites.findMany({});
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.invalidites.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & InvaliditeDto) {
      const update = await this.prismaservice.invalidites.update({
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
      await this.prismaservice.invalidites.delete({
        where: {
          id,
        },
      });
      return { message: 'nom supprimé avec success ' };
    }
  
    async create(applicationdto: InvaliditeDto) {
      const create = await this.prismaservice.invalidites.create({
        data: {
          nom: applicationdto.nom,
        },
      });
      return create;
    }
}
