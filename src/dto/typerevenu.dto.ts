import { IsNotEmpty } from 'class-validator';
export class TypeRevenuDto {
  @IsNotEmpty({
    message: 'Le nom est obligatoire',
  })
  intitule: string;
}