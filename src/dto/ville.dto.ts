import { IsNotEmpty } from 'class-validator';
export class VilleDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  nom: string;
}