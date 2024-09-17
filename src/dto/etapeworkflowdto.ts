import { IsNotEmpty } from 'class-validator';
export class EtapeWorkFlowDto {
  @IsNotEmpty({
    message: 'Le champ ordre est obligatoire',
  })
  ordre: string;
  @IsNotEmpty({
    message: 'Le champ couleur est obligatoire',
  })
  couleur: string;
  @IsNotEmpty({
    message: 'Le champ libelle est obligatoire',
  })
  libelle: string;
  @IsNotEmpty({
    message: 'Le champ statut est obligatoire',
  })
  statut: string;
  
  @IsNotEmpty({
    message: 'Le champ description est obligatoire',
  })
  description: string;
}