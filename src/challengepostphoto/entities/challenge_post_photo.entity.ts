import { ChallengeParticipant } from 'src/challengeparticipant/entities/challengeparticipant.entity';
import { ChallengePhotoLike } from 'src/challengephotolike/entities/challengephotolike.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ChallengePhotoPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  challengePhotoUrl: string;

  @OneToOne(() => ChallengeParticipant)
  @JoinColumn()
  challengeParticipant: ChallengeParticipant;

  @Column()
  challengeParticipantId: number;

  @OneToMany(
    () => ChallengePhotoLike,
    (challengePhotoLike) => challengePhotoLike.challengePhotoPost,
  )
  challengePhotoLike: ChallengePhotoLike[];
}
