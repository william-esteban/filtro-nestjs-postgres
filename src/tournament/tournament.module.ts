import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentService } from 'src/tournament/tournament.service';
import { TournamentController } from 'src/tournament/tournament.controller';
import { Tournament } from 'src/tournament/entity/Tournament.entity';
import { PlayerModule } from 'src/player/Player.module';
import { ResultModule } from 'src/result/resultados.module';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament]),
  PlayerModule,
  ResultModule
],

  exports: [TypeOrmModule],
  providers: [TournamentService],
  controllers: [TournamentController],
  
})
export class TournamentModule {}
