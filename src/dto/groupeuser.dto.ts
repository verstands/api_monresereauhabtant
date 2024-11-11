import { IsNotEmpty } from 'class-validator';
export class GroupeUserDto {
  @IsNotEmpty({
    message: 'Le champ  groupe est obligatoire',
  })
  id_groupe: string;

  @IsNotEmpty({
    message: 'Le champ  agent est obligatoire',
  })
  id_agent: string;
}