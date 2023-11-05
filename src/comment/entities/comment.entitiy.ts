import { Challenge } from 'src/challenge/entities/challenge.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  comment: string;

  @ManyToOne(() => Challenge, (challenge) => challenge.comments)
  challenge: Challenge;

  @Column()
  challengeId: number;

  @ManyToOne(() => User, (user) => user.comments)
  user: User;
  @Column()
  userId: number;
}
