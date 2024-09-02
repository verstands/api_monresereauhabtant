import { IsOptional, IsNotEmpty } from 'class-validator';
export class MailDto {
  @IsNotEmpty({
    message: 'Le champ a est obligatoire',
  })
  exp: string;

  @IsNotEmpty({
    message: 'Le champ objet est obligatoire',
  })
  objet: string;

  @IsOptional()
  cc: string;

  @IsNotEmpty({
    message: 'Le champ message est obligatoire',
  })
  message: string;
  @IsNotEmpty({
    message: 'Le champ message est obligatoire',
  })
  from: string;
}
