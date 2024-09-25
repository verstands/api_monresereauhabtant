import { IsNotEmpty } from 'class-validator';
export class CategorieRoleDto {
  @IsNotEmpty({
    message: 'Le champ role est obligatoire',
  })
  id_role: string;

  @IsNotEmpty({
<<<<<<< HEAD
    message: 'Le champ categorie est obligatoire',
  })
  id_categorie: string;
=======
    message: 'Le champ etapeworkflow est obligatoire',
  })
  id_etape: string;
>>>>>>> b618e5f (ddelo)
}