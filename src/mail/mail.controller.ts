import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailDto } from 'src/dto/mail.dto';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post()
  async sendConfirmation(@Body() data : MailDto ) {
    await this.mailService.sendUserConfirmation(data);
    return { message: 'Email envoyé avec success' }; 
  } 
}
