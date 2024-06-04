import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Competition } from './entity/competition.entity';
import { CreateCompetitionDto } from 'src/competition/dto/createCompetitionDTO';
import { UpdateCompetitionDto } from 'src/competition/dto/updateCompetitionDTO';

@Injectable()
export class CompetitionService {
  constructor(
    @InjectRepository(Competition)
    private readonly competitionRepository: Repository<Competition>,
  ) {}

  async create(createCompetitionDto: CreateCompetitionDto): Promise<Competition> {
    const competition = this.competitionRepository.create(createCompetitionDto);
    return this.competitionRepository.save(competition);
  }

  async findOne(id: number): Promise<Competition> {
    return this.competitionRepository.findOne({where: {id}, relations: ['results'] });
  }

  async update(id: number, updateCompetitionDto: UpdateCompetitionDto): Promise<Competition> {
    await this.competitionRepository.update(id, updateCompetitionDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.competitionRepository.delete(id);
  }
}
