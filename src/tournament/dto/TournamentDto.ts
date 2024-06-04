import { PlayerDto } from 'src/player/dto/playerDto';
import { CompetitionDto } from 'src/competition/dto/CompetitionDTO';

export class TournamentDto {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly startDate: Date;
  readonly endDate: Date;
  readonly players: PlayerDto[];
  readonly competitions: CompetitionDto[];
}
