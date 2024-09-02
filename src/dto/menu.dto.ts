import { IsNotEmpty } from 'class-validator';
export class MenuDto {
  @IsNotEmpty({
    message: 'Le champ a nom obligatoire',
  })
  nom: string;
  @IsNotEmpty({
    message: 'Le champ icon  obligatoire',
  })
  icon: string;
  @IsNotEmpty({
    message: 'Le champ url obligatoire',
  })
  url: string;
}
