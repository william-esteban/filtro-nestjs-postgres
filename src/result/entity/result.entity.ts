import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Competition } from 'src/competition/entity/competition.entity';
import { Player } from 'src/player/entity/players.entity';

@Entity()
export class Result {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Competition, competition => competition.results)
  competition: Competition;

  @ManyToOne(() => Player)
  winner: Player;

  @ManyToOne(() => Player)
  loser: Player;

  @Column({ nullable: false})
  winnerScore: number;

  @Column({ nullable: false})
  loserScore: number;
}
