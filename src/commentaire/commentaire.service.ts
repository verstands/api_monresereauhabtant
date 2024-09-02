import { Injectable } from '@nestjs/common';
import { CommentaireDto } from 'src/dto/commentaire.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CommentaireService {
  constructor(private readonly prismaservice: PrismaService) {}

    async get(params: { id_user: string; id_pospect: string }) {
        const { id_user, id_pospect } = params;
        const data = await this.prismaservice.commentaires.findMany({
        where: {
            id_user: id_user,
            id_prospect: id_pospect,
        },
        orderBy: {
            id: 'desc',
        },
        include: {
            pospect: true,
            user: true,
        },
        });
        return { data: data };
    }
    
      async getId({ id }: { id: string }) {
        const data = await this.prismaservice.commentaires.findUnique({
          where: {
            id: id,
          },
        });
        return { data: data };
      }
    
      async getIdProduit({ id }: { id: string }) {
        const data = await this.prismaservice.commentaires.findMany({
          where: {
            id: id,
          },
          include: {
            pospect: true,
            user: true,
          },
        });
        return { data: data };
      }
    
      async update({ id, ...data }: { id: string } & CommentaireDto) {
        const update = await this.prismaservice.commentaires.update({
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
        await this.prismaservice.commentaires.delete({
          where: {
            id,
          },
        });
        return { message: 'role supprimé avec success ' };
      }
    
      async create(applicationdto: CommentaireDto) {
        const create = await this.prismaservice.commentaires.create({
          data: applicationdto,
        });
        return create;
      }
}
