import { IsNotEmpty } from 'class-validator';
export class CategorieRoleDto {
  @IsNotEmpty({
    message: 'Le champ role est obligatoire',
  })
  id_role: string;

  @IsNotEmpty({
    message: 'Le champ categorie est obligatoire',
  })
  id_categorie: string;
}