import { IsNotEmpty } from 'class-validator';
export class AgendaDto {
  @IsNotEmpty({
    message: 'Le champ prospect est obligatoire',
  })
  id_postect: string;

  @IsNotEmpty({
    message: 'Le champ user est obligatoire',
  })
  id_user: string;

  @IsNotEmpty({
    message: 'Le champ user est obligatoire',
  })
  title: string;

  @IsNotEmpty({
    message: 'Le champ user est obligatoire',
  })
  start: string;
  
  @IsNotEmpty({
    message: 'Le champ user est obligatoire',
  })
  end: string;
}