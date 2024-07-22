import { IsNotEmpty } from 'class-validator';

export class ProspectDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  nom: string;

  @IsNotEmpty({
    message: 'Le champ prenom est obligatoire',
  })
  prenom: string;

  @IsNotEmpty({
    message: 'Le champ email est obligatoire',
  })
  email: string;

  @IsNotEmpty({
    message: 'Le champ telephone est obligatoire',
  })
  telephone: string;

  @IsNotEmpty({
    message: 'Le champ adresse est obligatoire',
  })
  adresse: string;

  @IsNotEmpty({
    message: 'Le champ ville est obligatoire',
  })
  ville: string;

  @IsNotEmpty({ 
    message: 'Le champ codepostal est obligatoire',
  })
  codepostal: string;

  @IsNotEmpty({
    message: 'Le champ type chauffage est obligatoire',
  })
  id_typechauffage: string;

  @IsNotEmpty({
    message: 'Le champ type revenu est obligatoire',
  })
  id_typerevenu: string;

  @IsNotEmpty({
    message: 'Le champ utilisateur est obligatoire',
  })
  id_user: string;
}
