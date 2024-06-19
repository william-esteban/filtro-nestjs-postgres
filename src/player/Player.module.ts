import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayerService } from'src/player/Player.service';
import { PlayerController } from 'src/player/Player.controller';
import { Player } from 'src/player/entity/players.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],

  exports: [TypeOrmModule],
  providers: [PlayerService],
  controllers: [PlayerController],
  
})
export class PlayerModule {}
