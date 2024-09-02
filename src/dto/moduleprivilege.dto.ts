import { IsNotEmpty } from 'class-validator';
export class ModulePrivilegeDto {
  @IsNotEmpty({
    message: 'Le champ module obligatoire',
  })
  id_module: string;
  @IsNotEmpty({
    message: 'Le champ privilege obligatoire',
  })
  id_privilege: string;
}