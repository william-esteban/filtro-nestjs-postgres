import { IsString, IsEmail } from 'class-validator';

export class CreatePlayerDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;
}
