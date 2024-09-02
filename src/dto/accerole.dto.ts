import { IsNotEmpty } from 'class-validator';
export class AccesRoleDto {
  @IsNotEmpty({
    message: 'Le utilisateur est obligatoire',
  })
  id_user : string;

  @IsNotEmpty({
    message: 'Le champ role est obligatoire',
  })
  id_role: string;
}