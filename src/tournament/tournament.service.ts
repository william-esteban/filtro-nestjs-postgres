import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tournament } from './entity/tournament.entity';
import { CreateTournamentDto } from 'src/tournament/dto/createTournamentDTO';
import { UpdateTournamentDto } from 'src/tournament/dto/updateTournamentDTO';

@Injectable()
export class TournamentService {
  constructor(
    @InjectRepository(Tournament)
    private readonly tournamentRepository: Repository<Tournament>,
  ) {}

  async create(createTournamentDto: CreateTournamentDto): Promise<Tournament> {
    const tournament = this.tournamentRepository.create(createTournamentDto);
    return this.tournamentRepository.save(tournament);
  }

  async findOne(id: number): Promise<Tournament> {
    return this.tournamentRepository.findOne({ where: {id}, relations: ['players', 'competitions'] });
  }

  async update(id: number, updateTournamentDto: UpdateTournamentDto): Promise<Tournament> {
    await this.tournamentRepository.update(id, updateTournamentDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.tournamentRepository.delete(id);
  }
}
