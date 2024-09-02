import { Injectable } from '@nestjs/common';
import { MenuDto } from 'src/dto/menu.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class MenuService {
    constructor(private readonly prismaservice: PrismaService) {}

    async get() {
      const data = await this.prismaservice.menus.findMany({
        orderBy: {
          id : 'desc'
        }
      });
      return { data: data };
    }
  
    async getId({ id }: { id: string }) {
      const data = await this.prismaservice.menus.findUnique({
        where: {
          id: id,
        },
      });
      return { data: data };
    }
  
    async update({ id, ...data }: { id: string } & MenuDto) {
      const update = await this.prismaservice.menus.update({
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
      await this.prismaservice.menus.delete({
        where: {
          id,
        },
      });
      return { message: 'nom supprimé avec success ' };
    }
  
    async create(applicationdto: MenuDto) {
      const create = await this.prismaservice.menus.create({
        data: applicationdto
      });
      return create;
    }
}
