import { IsNotEmpty } from 'class-validator';
export class CategorieWorkFlowDto {
  @IsNotEmpty({
    message: 'Le champ ordre est obligatoire',
  })
  ordre: string;
  @IsNotEmpty({
    message: 'Le champ couleur est obligatoire',
  })
  idetape: string;
  @IsNotEmpty({
    message: 'Le champ etape est obligatoire',
  })
  libelle: string;
  @IsNotEmpty({
    message: 'Le champ statut est obligatoire',
  })
  statut: string;
}