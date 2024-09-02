import { IsNotEmpty } from 'class-validator';
export class TypeProduitDto {
  @IsNotEmpty({
    message: 'Le titre est obligatoire',
  })
  titre: string;
  
  @IsNotEmpty({
    message: 'Le image est obligatoire',
  })
  image: string;

  @IsNotEmpty({
    message: 'Le description est obligatoire',
  })
  description: string;
}