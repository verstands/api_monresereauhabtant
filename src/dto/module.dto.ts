import { IsNotEmpty } from 'class-validator';
export class ModuleDto {
  @IsNotEmpty({
    message: 'Le champ a nom obligatoire',
  })
  id_module: string;
  @IsNotEmpty({
    message: 'Le champ a nom obligatoire',
  })
  id_fonction: string;
}
