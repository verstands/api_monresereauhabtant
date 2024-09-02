import { IsNotEmpty } from 'class-validator';

export class PieceJointDto {
  @IsNotEmpty({
    message: 'Le champ utilisateur est obligatoire',
  })
  id_user: string;

  @IsNotEmpty({
    message: 'Le champ prospect est obligatoire',
  })
  id_prospect : string;

  file?: string; 

  @IsNotEmpty({
    message: 'Le champ date est obligatoire',
  })
  date: string;

  @IsNotEmpty({
    message: 'Le champ staus est obligatoire',
  })
  status: string;
}
