import { IsNotEmpty } from 'class-validator';
export class HistoriqueAffiche {
  @IsNotEmpty({
    message: 'Le champ message est obligatoire',
  })
  action: string;
  @IsNotEmpty({
    message: 'Le champ prospect est obligatoire',
  })
  userProspect: string;
  @IsNotEmpty({
    message: 'Le champ utilisateur est obligatoire',
  })
  userAgent: string;
}
