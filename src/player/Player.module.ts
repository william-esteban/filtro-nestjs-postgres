import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerService } from 'src/player/PlayerService';
import { PlayerController } from './player.controller';
import { Player } from 'src/player/entity/players.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  providers: [PlayerService],
  controllers: [PlayerController],
})
export class PlayerModule {}
