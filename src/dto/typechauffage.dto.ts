import { IsNotEmpty } from 'class-validator';
export class TypechauffageDto {
  @IsNotEmpty({
    message: 'Le nom est obligatoire',
  })
  intitule: string;
}