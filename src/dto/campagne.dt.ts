import { IsNotEmpty } from 'class-validator';
export class CapamgneDto {
  @IsNotEmpty({
    message: 'Le champ titre est obligatoire',
  })
  titre: string;

  @IsNotEmpty({
    message: 'Le champ file est obligatoire',
  })
  file: string;
}