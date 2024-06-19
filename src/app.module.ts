// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { TournamentController } from 'src/tournament/tournament.controller';
// import {TournamentModule } from 'src/tournament/tournament.module';
// import { ResultadosController } from './result/resultados.controller';
// import { ResultModule } from 'src/result/resultados.module';
// import { CompetitionController } from 'src/competition/competencia.controller';
// import { CompetitionModule } from 'src/competition/competencia.module';
// import { PlayerController } from './player/Player.controller';
// import { PlayerModule } from './player/Player.module';

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentModule } from 'src/tournament/tournament.module';
import { ResultModule } from 'src/result/resultados.module';
import { CompetitionModule } from 'src/competition/competencia.module';
import { PlayerModule } from 'src/player/Player.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.DB_PORT || 5432,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      ssl: true,
    }),
    TournamentModule,
    PlayerModule,
    ResultModule,
    CompetitionModule,
    

  ],
  controllers: [],
 providers: [],
})
export class AppModule {}