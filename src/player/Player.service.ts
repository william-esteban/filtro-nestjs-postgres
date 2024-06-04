import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from 'src/player/entity/players.entity';
import { CreatePlayerDto } from 'src/player/dto/createPlayer.dto';
import { UpdatePlayerDto } from 'src/player/dto/updatePlayerDto';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async create(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = this.playerRepository.create(createPlayerDto);
    return this.playerRepository.save(player);
  }

  async findOne(id: number): Promise<Player> {
    return this.playerRepository.findOne({where: { id }});
  }

  async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
    await this.playerRepository.update(id, updatePlayerDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.playerRepository.delete(id);
  }
}
