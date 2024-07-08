import { Injectable } from '@nestjs/common';
import { ArchivageDto } from 'src/dto/archivage.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ArchivageService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.archivages.findMany({});
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.archivages.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & ArchivageDto) {
      const update = await this.prismaservice.archivages.update({
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
      await this.prismaservice.archivages.delete({
        where: {
          id,
        },
      });
      return { message: 'nom supprimé avec success ' };
    }
  
    async create(applicationdto: ArchivageDto) {
      const create = await this.prismaservice.archivages.create({
        data: {
          nom: applicationdto.nom,
        },
      });
      return create;
    }
}
