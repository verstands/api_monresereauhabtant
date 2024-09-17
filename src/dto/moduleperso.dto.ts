import { IsNotEmpty } from 'class-validator';
export class ModulePersoDto {
  @IsNotEmpty({
    message: 'Le champ nom obligatoire',
  })
  libelle: string;
  @IsNotEmpty({
    message: 'Le statut obligatoire',
  })
  statut: string;
} 