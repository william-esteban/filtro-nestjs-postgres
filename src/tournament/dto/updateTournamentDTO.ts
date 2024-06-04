import { PartialType } from '@nestjs/mapped-types';
import { CreateTournamentDto } from 'src/tournament/dto/createTournamentDTO';

export class UpdateTournamentDto extends PartialType(CreateTournamentDto) {}
