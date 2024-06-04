import { PartialType } from '@nestjs/mapped-types';
import { CreatePlayerDto } from 'src/player/dto/createPlayer.dto';

export class UpdatePlayerDto extends PartialType(CreatePlayerDto) {}

