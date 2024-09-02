import { IsNotEmpty, IsOptional } from 'class-validator';

export class ModeleMailDto {
  @IsNotEmpty({
    message: 'Le champ utilisateur est obligatoire',
  })
  id_user: string;

  @IsNotEmpty({
    message: 'Le champ active est obligatoire',
  })
  active: boolean;

  @IsNotEmpty({
    message: 'Le champ bccexp est obligatoire',
  })
  bccexp: string; 

  @IsNotEmpty({
    message: 'Le champ ccexp est obligatoire',
  })
  ccexp: string;

  @IsNotEmpty({
    message: 'Le champ message est obligatoire',
  })
  contenue: string;

  @IsNotEmpty({
    message: 'Le champ description est obligatoire',
  })
  description: string;

  @IsNotEmpty({
    message: 'Le champ destinataire expediteur est obligatoire',
  })
  disnataireexp: string;

  @IsNotEmpty({
    message: 'Le champ email expediteur est obligatoire',
  })
  emailexp: string;

  @IsOptional()
  fichier: string;

  @IsNotEmpty({
    message: 'Le champ type nom est obligatoire',
  })
  nom: string;

  @IsNotEmpty({
    message: 'Le champ nom expediteur est obligatoire',
  })
  nomexp: string;

  @IsNotEmpty({
    message: 'Le champ campagne est obligatoire',
  })
  id_campagne: string;

  @IsNotEmpty({
    message: 'Le champ role est obligatoire',
  })
  id_fonction: string;

  @IsNotEmpty({
    message: 'Le champ sujet est obligatoire',
  })
  sujet: string;
}
