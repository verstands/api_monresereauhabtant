;import { IsNotEmpty } from 'class-validator';
export class ScriptDto {
   
  id: string;
  @IsNotEmpty({
    message: 'Le champ titre est obligatoire',
  })
  titre: string;
  @IsNotEmpty({
    message: 'Le champ contenue est obligatoire',
  })
  contenu: string;
  @IsNotEmpty({
    message: 'Le champ position est obligatoire',
  })
  position: string;
}