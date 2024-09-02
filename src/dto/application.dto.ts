import { IsNotEmpty } from 'class-validator';
export class ApplicationDto {
  @IsNotEmpty({
    message: 'Le champ titre est obligatoire',
  })
  titre: string;
  @IsNotEmpty({
    message: 'Le champ image est obligatoire',
  })
  image: string;
  @IsNotEmpty({
    message: 'Le champ lien est obligatoire',
  })
  lien: string;
}