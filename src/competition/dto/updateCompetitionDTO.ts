import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetitionDto } from 'src/competition/dto/createCompetitionDTO';

export class UpdateCompetitionDto extends PartialType(CreateCompetitionDto) {}
