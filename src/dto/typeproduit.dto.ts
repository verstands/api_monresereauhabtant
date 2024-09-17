import { IsNotEmpty } from 'class-validator';
export class TypeProduitDto {
  @IsNotEmpty({
    message: 'Le champ titre est obligatoire',
  })
  titre: string;
  
  @IsNotEmpty({
    message: 'Le  champ icon est obligatoire',
  })
  image: string;

  @IsNotEmpty({
    message: 'Le  champ description est obligatoire',
  })
  description: string;

  @IsNotEmpty({
    message: 'Le champ workflow est obligatoire',
  })
  id_work: string;
}