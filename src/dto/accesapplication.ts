import { IsNotEmpty } from 'class-validator';
export class AccesApplicationDto {
  @IsNotEmpty({
    message: 'Le utilisateur est obligatoire',
  })
  id_user : string;

  @IsNotEmpty({
    message: 'Le champ application est obligatoire',
  })
  id_application: string;
}