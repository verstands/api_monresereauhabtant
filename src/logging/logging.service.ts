import { Injectable } from '@nestjs/common';
import { LogEntry } from 'src/dto/logenty.dto';
import { PaginationDto } from 'src/dto/paginationPage.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LoggingService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(log: LogEntry) {
    await this.prismaService.logdata.create({
      data: {
        action: log.action,
        endpoint: log.endpoint,
        user: log.user,
        processingTime: log.processingTime,
        ip: log.ip,
        userAgent: 'DD',
        latitude: 0,
        longitude: 0,
        os: log.os,
        browser: log.browser,
        isp: log.isp,
        pays: log.pays,
      },
    });
  }

  async get(paginationdto: PaginationDto) {
    const { skip, limit } = paginationdto;
    const validSkip = Number.isInteger(skip) ? skip : 0;
    const validTake = Number.isInteger(limit) ? limit : 50;
  
    const data = await this.prismaService.logdata.findMany({
      orderBy: {
        id: 'desc',
      },
      include : {
        agent : true
      },
      skip: validSkip,
      take: validTake,
    });
  
    return { data : data };
  }

  async getId({ id }: { id: string }) {
    const numericId = parseInt(id, 10);

    const data = await this.prismaService.logdata.findUnique({
      where: {
        id: numericId,
      },
    });
    return { data: data };
  }

  async delete({ id }: { id: string }) {
    const numericId = parseInt(id, 10);
    await this.prismaService.logdata.delete({
      where: {
        id: numericId,
      },
    });
    return { message: 'nom supprimé avec success ' };
  }
}
