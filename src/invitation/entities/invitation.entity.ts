import { Challenge } from 'src/challenge/entities/challenge.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Invitation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column({ default: 'pending' })
  invitationStatus: string;

  @ManyToOne(() => Challenge, (challenge) => challenge.invitations)
  challenge: Challenge;

  @Column()
  challengeId: number;
}
