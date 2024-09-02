;import { IsNotEmpty } from 'class-validator';
export class StatusDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  nom: string;
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  value: string;
}