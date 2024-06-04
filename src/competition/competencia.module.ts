import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionService } from 'src/competition/competencia.service';
import { CompetitionController } from 'src/competition/competencia.controller';
import { Competition } from './entity/competition.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Competition])],
  providers: [CompetitionService],
  controllers: [CompetitionController],
})
export class CompetitionModule {}
