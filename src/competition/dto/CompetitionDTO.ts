import { ResultDto } from 'src/result/dto/ResultDTO';

export class CompetitionDto {
  readonly id: number;
  readonly name: string;
  readonly tournamentId: number;
  readonly results: ResultDto[];
}
