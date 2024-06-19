import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Tournament } from 'src/tournament/entity/Tournament.entity';
import { Result } from 'src/result/entity/result.entity';

@Entity()
export class Competition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @ManyToOne(() => Tournament, tournament => tournament.competitions)
  tournament: Tournament;

  @OneToMany(() => Result, result => result.competition)
  results: Result[];
}
