;import { IsNotEmpty } from 'class-validator';
export class NotificationDto {
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  title: string;
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  description: string;
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  createdAt: string;
  @IsNotEmpty({
    message: 'Le champ nom est obligatoire',
  })
  agentId: string;
}