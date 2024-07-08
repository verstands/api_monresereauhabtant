;import { IsNotEmpty } from 'class-validator';
export class InvaliditeDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  nom: string;
}