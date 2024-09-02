import { IsNotEmpty } from 'class-validator';
export class FonctionMenuDto{
  @IsNotEmpty({
    message: 'Le champ nom menu est obligatoire',
  })
  idmenu: string;
  @IsNotEmpty({
    message: 'Le champ nom fonction est obligatoire',
  })
  idfonction: string;
}