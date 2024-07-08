;import { IsNotEmpty } from 'class-validator';
export class InstallateurDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  nom: string;
}