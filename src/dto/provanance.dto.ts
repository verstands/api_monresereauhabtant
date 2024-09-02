;import { IsNotEmpty } from 'class-validator';
export class ProvenanceDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  nom: string;
}