import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Result } from './entity/result.entity';
import { CreateResultDto } from 'src/result/dto/createResultDTO';
import { UpdateResultDto } from 'src/result/dto/updateResultDTo';

@Injectable()
export class ResultService {
  constructor(
    @InjectRepository(Result)
    private readonly resultRepository: Repository<Result>,
  ) {}

  async create(createResultDto: CreateResultDto): Promise<Result> {
    const result = this.resultRepository.create(createResultDto);
    return this.resultRepository.save(result);
  }

  async findOne(id: number): Promise<Result> {
    return this.resultRepository.findOne({where: {id: id}});
  }
  async update(id: number, updateResultDto: UpdateResultDto): Promise<Result> {
    await this.resultRepository.update(id, updateResultDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.resultRepository.delete(id);
  }
}  