import { IsNotEmpty } from 'class-validator';
export class CommentaireDto {
  @IsNotEmpty({
    message: 'Le champ message est obligatoire',
  })
  message: string;

  @IsNotEmpty({
    message: 'Le champ prospect est obligatoire',
  })
  id_prospect: string;

  @IsNotEmpty({
    message: 'Le champ utilisateur est obligatoire',
  })
  id_user: string;
  @IsNotEmpty({
    message: 'Le champ data est obligatoire',
  })
  date: string;
}