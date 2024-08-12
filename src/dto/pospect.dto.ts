import { IsEmail  ,IsOptional   } from 'class-validator';
export class PospectDto {
 
 @IsOptional()
  nom: string;

  @IsOptional()
  id_user: string

  @IsOptional()
  prenom: string;
  
  @IsOptional()
  telephone: string;
  
  @IsOptional()
  adresse: string;
 
  @IsOptional()
  ville: string;
  
  @IsOptional()
  codepostal: string;
  
  @IsOptional()
  surface: string;
  
  @IsOptional()
  id_typechauffage: string;
  
  @IsOptional()
  id_typerevenu: string;

  @IsOptional()
  code: string;
  
  @IsOptional()
  id_campagne: string;

  @IsOptional()
  id_produit: string;
  
  @IsOptional()
  status: string

  @IsOptional()
  statusdossier: string

  @IsOptional()
  typelead: string

  @IsEmail(
    {},
    {
      message: 'Vous devez fournir une adresse email valide',
    },
  )
  @IsOptional()
  email: string;
}
