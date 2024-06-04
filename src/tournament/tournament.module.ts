import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentService } from 'src/tournament/tournament.service';
import { TournamentController } from 'src/tournament/tournament.controller';
import { Tournament } from './entity/tournament.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Tournament])],
  providers: [TournamentService],
  controllers: [TournamentController],
})
export class TournamentModule {}
