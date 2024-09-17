;import { IsNotEmpty } from 'class-validator';
export class StatusDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  ordre: string;
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  couleur: string;
  @IsNotEmpty({
    message: 'Le champ libelle est obligatoire',
  })
  libelle: string;
  @IsNotEmpty({
    message: 'Le champ status est obligatoire',
  })
  status: string;
  @IsNotEmpty({
    message: 'Le champ categorieom est obligatoire',
  })
  idcategorie: string;
}