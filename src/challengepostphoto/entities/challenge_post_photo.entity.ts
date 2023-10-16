import { ChallengeParticipant } from 'src/challengeparticipant/entities/challengeparticipant.entity';
import { ChallengePhotoLike } from 'src/challengephotolike/entities/challengephotolike.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class ChallengePhotoPost {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // userId: number;

  // @Column()
  // challengeId: number;

  @Column()
  challengePhotoUrl: string;

  // @OneToOne(
  //   () => ChallengeParticipant,
  //   (participant) => participant.challenegePhotoPost,
  // )
  // participant: ChallengeParticipant;

  @OneToMany(
    () => ChallengePhotoLike,
    (challengePhotoLike) => challengePhotoLike.challengePhotoPost,
  )
  challengePhotoLike: ChallengePhotoLike[];
}
