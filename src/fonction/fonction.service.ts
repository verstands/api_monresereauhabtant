import { Injectable } from '@nestjs/common';
import { FonctionDto } from 'src/dto/fonction.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FonctionService {
  constructor(private readonly prismaservice: PrismaService) { }

  async get() {
    const data = await this.prismaservice.fonctions.findMany({
      orderBy: {
        "id": "desc"
      },
    });
    return { data: data };
  }

  async getFonctionModule({ id }: { id: string }) {
    const fonctions = await this.prismaservice.fonctions.findMany({
      where: {
        id: id,
      },
      orderBy: {
        id: 'desc', 
      },
    });
    const modules = await this.prismaservice.modulePerso.findMany();
    const result = await Promise.all(fonctions.map(async (fonction) => {
      const accessibleModules = await this.prismaservice.modules.findMany({
        where: {
          id_fonction: fonction.id, 
        },
        select: {
          id: true, 
          id_module: true,
        },
      });
      const modulesWithAccess = modules.map(module => {
        const hasAccess = accessibleModules.some(am => am.id_module === module.id) ? 1 : 0;
        return {
          moduleId: module.id, 
          moduleName: module.libelle, 
          hasAccess: hasAccess,
          modulePersoId: hasAccess === 1 ? module.id : null,
          moduleIdModule: hasAccess === 1 ? accessibleModules.find(am => am.id_module === module.id)?.id_module : null,
          moduleRecordId: hasAccess === 1 ? accessibleModules.find(am => am.id_module === module.id)?.id : null, 
        };
      });
  
      return {
        fonctionId: fonction.id,
        fonctionName: fonction.initule,
        modules: modulesWithAccess, 
      };
    }));

    const menusF = await this.prismaservice.menus.findMany();
    const fonctionMenus = await this.prismaservice.fonctionMenu.findMany({
      where: { idfonction: id },
      select: { id: true, idmenu: true },
    });
  
    const assignedMenuIds = fonctionMenus.map(fm => fm.idmenu);
  
    // Transformer les menus pour ajouter le flag hasAccess
    const menusWithAccess = menusF.map((menu) => {
      const accessMenu = fonctionMenus.find((fm) => fm.idmenu === menu.id);
      return {
        menuId: menu.id,
        menuName: menu.nom,
        icon: menu.icon,
        url: menu.url,
        hasAccess: accessMenu ? 1 : 0,
        fonctionMenuId: accessMenu ? accessMenu.id : null, // Retourne l'ID de FonctionMenu si accès
      };
    });
  
    return { data: result, dataMenu : menusWithAccess };
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


  async getStatutsByFonctionId(fonctionId: string, id_workflow: string) {
    const data = await this.prismaservice.fonctions.findUnique({
      where: { id: fonctionId },
      select: {
        CatgorieRole: {
          select: {
            categorie: {
              where: {
                id_work: id_workflow
              },
              select: {
                libelle: true,
                CategorieWorkflows: {
                  select: {
                    libelle: true,
                    Status: {
                      select: {
                        id: true,
                        ordre: true,
                        couleur: true,
                        libelle: true,
                        status: true,
                        rdv: true
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


}
