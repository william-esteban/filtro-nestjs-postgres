import { IsNumber } from 'class-validator';

export class CreateResultDto {
  @IsNumber()
  readonly competitionId: number;

  @IsNumber()
  readonly winnerId: number;

  @IsNumber()
  readonly loserId: number;

  @IsNumber()
  readonly winnerScore: number;

  @IsNumber()
  readonly loserScore: number;
}
