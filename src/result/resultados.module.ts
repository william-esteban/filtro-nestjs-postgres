import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResultService } from 'src/result/resultados.service';
import { ResultadosController } from 'src/result/resultados.controller';
import { Result } from './entity/result.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Result])],
  providers: [ResultService],
  controllers: [ResultadosController],
})
export class ResultModule {}
