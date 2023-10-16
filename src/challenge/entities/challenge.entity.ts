import { ChallengeParticipant } from 'src/challengeparticipant/entities/challengeparticipant.entity';
import { Invitation } from 'src/invitation/entities/invitation.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Challenge {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  category: string;

  @Column()
  prize: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  invitationLink: string;

  // Define the one-to-many relationship with Participant
  @OneToMany(() => ChallengeParticipant, (participant) => participant.challenge)
  participants: ChallengeParticipant[];

  @ManyToOne(() => User, (user) => user.challenges)
  user: User;

  @Column()
  userId: number;

  @OneToMany(() => Invitation, (invitation) => invitation.challenge)
  invitations: Invitation[];
}
