import { IsNotEmpty } from 'class-validator';
export class CategorieRoleDto {
  @IsNotEmpty({
    message: 'Le champ role est obligatoire',
  })
  id_role: string;

  @IsNotEmpty({
    message: 'Le champ etapeworkflow est obligatoire',
  })
  id_etape: string;
}