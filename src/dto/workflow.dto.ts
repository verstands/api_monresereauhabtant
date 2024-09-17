import { IsNotEmpty } from 'class-validator';
export class WorkFlowDto {
  @IsNotEmpty({
    message: 'Le champ ordre est obligatoire',
  })
  ordre: string;

  @IsNotEmpty({
    message: 'Le champ libelle est obligatoire',
  })
  libelle: string;

  @IsNotEmpty({
    message: 'Le champ statut est obligatoire',
  })
  statut: string;
}