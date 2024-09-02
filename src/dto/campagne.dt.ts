import { IsOptional } from 'class-validator';
export class CapamgneDto {
  
 @IsOptional()
  titre: string

 @IsOptional()
  id_produit: string

 @IsOptional()
  statut: string

 @IsOptional()
  nouveau: string

 @IsOptional()
  nrp: string

 @IsOptional()
  rdv: string

 @IsOptional()
  nonvalide: string

 @IsOptional()
  nrptermine: string

 @IsOptional()
  total: string

 @IsOptional()
  distribue: string

 @IsOptional()
  restant: string
}