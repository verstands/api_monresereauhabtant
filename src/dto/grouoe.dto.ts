import { IsNotEmpty } from 'class-validator';
export class GroupeDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  nom: string;
}