import { Injectable } from '@nestjs/common';
import { FonctionDto } from 'src/dto/fonction.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FonctionService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.fonctions.findMany({
        orderBy:{
            "id" : "desc"
        },
      });
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.fonctions.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & FonctionDto) {
      const update = await this.prismaservice.fonctions.update({
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
      await this.prismaservice.fonctions.delete({
        where: {
          id,
        },
      });
      return { message: 'fonction supprimé avec success ' };
    }

    async create(applicationdto: FonctionDto) {
        const createAgent = await this.prismaservice.fonctions.create({
          data: applicationdto,
        });
        return createAgent;
    }
<<<<<<< HEAD
=======

    async getStatutsByFonctionId(fonctionId: string) {
      const data = await this.prismaservice.fonctions.findUnique({
        where: { id: fonctionId },
        select: {
          CatgorieRole: {
            select: {
              // Relation avec EtapeWorkflows
              categorie : {
                select: {
                  // Relation avec CategorieWorkflows
                  CategorieWorkflows: {
                    select: {
                      // Relation avec Status
                      Status: {
                        select: {
                          id: true,
                          ordre: true,
                          couleur: true,
                          libelle: true,
                          status: true
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      });
    
      return { data };
    }
>>>>>>> b618e5f (ddelo)
}
