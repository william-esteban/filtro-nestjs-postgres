import { IsString, IsDate } from 'class-validator';

export class CreateTournamentDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly description: string;

  @IsDate()
  readonly startDate: Date;

  @IsDate()
  readonly endDate: Date;
}
