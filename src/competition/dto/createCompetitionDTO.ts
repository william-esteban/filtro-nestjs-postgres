import { IsString, IsNumber } from 'class-validator';

export class CreateCompetitionDto {
  @IsString()
  readonly name: string;

  @IsNumber()
  readonly tournamentId: number;
}
