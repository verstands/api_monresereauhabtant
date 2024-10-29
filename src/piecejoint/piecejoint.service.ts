import { Injectable } from '@nestjs/common';
import { PieceJointDto } from 'src/dto/piecejoint.dto';
import { PrismaService } from 'src/prisma.service';
import * as moment from 'moment';

@Injectable()
export class PiecejointService {
  constructor(private readonly prismaservice: PrismaService) {}

  async get() {
    const data = await this.prismaservice.pieceJoits.findMany({
      orderBy: {
        id: 'desc',
      },
    });
  
    const baseUrl = 'http://185.182.186.58:4000/uploads';
  
    const filesWithUrls = data.map((pieceJoint) => {
      const fileUrl = `${baseUrl}/${pieceJoint.file}`;
      return { ...pieceJoint, fileUrl };
    });
  
    return { data: filesWithUrls };
  }

  async getId({ id }: { id: string }) {
    const data = await this.prismaservice.pieceJoits.findUnique({
      where: {
        id: id,
      },
    });
    return { data: data };
  }

  async update({ id, ...data }: { id: string } & PieceJointDto) {
    const update = await this.prismaservice.pieceJoits.update({
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
    await this.prismaservice.pieceJoits.delete({
      where: {
        id,
      },
    });
    return { message: 'Pièce jointe supprimée avec succès' };
  }


    async create(pieceJointDto: PieceJointDto, file: Express.Multer.File) {
      const createData = { ...pieceJointDto, file: file.filename };  // Utiliser le nom de fichier généré
  
      const newPieceJoint = await this.prismaservice.pieceJoits.create({
        data: createData,
      });
  
      return newPieceJoint;
    }
  
}
