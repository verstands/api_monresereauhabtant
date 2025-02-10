import { Injectable } from '@nestjs/common';
import { GroupeDto } from 'src/dto/grouoe.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GroupeService {
    constructor(private readonly prismaservice: PrismaService
    ) {}

    async get() {
      const data = await this.prismaservice.groupes.findMany({
        orderBy:{
            "id" : "desc"
        },
      });
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.groupes.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & GroupeDto) {
      const update = await this.prismaservice.groupes.update({
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
      try {
        // Supprimer d'abord les enregistrements liés dans la table GroupeUser
        await this.prismaservice.groupeUser.deleteMany({
          where: { id_groupe: id },
        });
    
        // Ensuite, supprimer le groupe
        const deletedGroup = await this.prismaservice.groupes.delete({
          where: { id },
        });
    
        if (deletedGroup) {
          console.log(`Groupe supprimé avec succès: ${id}`);
        } else {
          console.log(`Aucun groupe trouvé avec l'ID: ${id}`);
        }
      } catch (error) {
        console.error('Erreur lors de la suppression du groupe:', error);
        throw new Error('Erreur lors de la suppression du groupe');
      }
    }
    
    

    async create(applicationdto: GroupeDto) {
        const createAgent = await this.prismaservice.groupes.create({
          data: applicationdto,
        });
        return createAgent;
    }
}
