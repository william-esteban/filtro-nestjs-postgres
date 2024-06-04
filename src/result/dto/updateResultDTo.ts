import { PartialType } from '@nestjs/mapped-types';
import { CreateResultDto } from 'src/result/dto/createResultDTO';

export class UpdateResultDto extends PartialType(CreateResultDto) {}
