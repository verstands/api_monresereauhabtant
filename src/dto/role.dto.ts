;import { IsNotEmpty } from 'class-validator';
export class RoleDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  initule: string;
}