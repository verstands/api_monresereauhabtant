;import { IsNotEmpty } from 'class-validator';
export class ArchivageDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  nom: string;
}