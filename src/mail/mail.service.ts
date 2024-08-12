import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailDto } from 'src/dto/mail.dto';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
  ) {}

  async sendUserConfirmation(data: MailDto) {
    const from = data.from || "expertise@monreseauhabitat.fr"; 
    await this.mailerService.sendMail({
      to: data.exp,
      from: from,
      subject: data.objet,
      html: `
        <h1>${data.objet}!</h1>
        <p>${data.message}</p>
      `,
    });
  }
}
