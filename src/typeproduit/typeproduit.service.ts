import { Injectable } from '@nestjs/common';
import { TypeProduitDto } from 'src/dto/typeproduit.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TypeproduitService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.typeProduits.findMany({
        orderBy: {
          id : 'desc'
        }
      });
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.typeProduits.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & TypeProduitDto) {
      const update = await this.prismaservice.typeProduits.update({
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
      await this.prismaservice.typeProduits.delete({
        where: {
          id,
        },
      });
      return { message: 'nom supprimé avec success ' };
    }
  
    async create(applicationdto: TypeProduitDto) {
      const create = await this.prismaservice.typeProduits.create({
        data: {
          titre: applicationdto.titre,
          image: applicationdto.image,
          description: applicationdto.description,
        },
      });
      return create;
    }
}
