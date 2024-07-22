import { IsNotEmpty } from 'class-validator';
export class FonctionDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  initule: string;
}