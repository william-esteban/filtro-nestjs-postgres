import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToMany } from 'typeorm';
import { Tournament } from 'src/tournament/entity/Tournament.entity';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @OneToMany(() => Tournament, tournament => tournament.players)
  tournaments: Tournament[];
}
