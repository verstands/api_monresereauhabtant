import { IsNotEmpty } from 'class-validator';
export class AgendaDto {
  @IsNotEmpty({
    message: 'Le champ info est obligatoire',
  })
  info: string;

  @IsNotEmpty({
    message: 'Le champ zone est obligatoire',
  })
  zone: string;

  @IsNotEmpty({
    message: 'Le champ telephone est obligatoire',
  })
  telephone: string;

  @IsNotEmpty({
    message: 'Le champ id_user est obligatoire',
  })
  id_user: {
    connect: {
      id: string; // or number, depending on the type of the id field in the Agents model
    };
  };
}