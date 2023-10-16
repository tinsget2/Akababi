import { Challenge } from 'src/challenge/entities/challenge.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ChallengePhotoPost } from 'src/challengepostphoto/entities/challenge_post_photo.entity';
@Entity()
export class ChallengeParticipant {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @ManyToOne(() => Challenge, (challenge) => challenge.participants)
  challenge: Challenge;

  @Column()
  challengeId: number;

  // @OneToOne(() => ChallengePhotoPost)
  // @JoinColumn({ name: 'ChallengePhotoPostid', referencedColumnName: 'id' })
  // challengePhotoPost: ChallengePhotoPost;

  // @OneToOne(
  //   () => ChallengePhotoPost,
  //   (challengePhotoPost) => challengePhotoPost.participant,
  //   { cascade: true },
  // )
  // @JoinColumn()
  // challenegePhotoPost: ChallengePhotoPost;

  // @ManyToOne(
  //   () => ChallengePhotoPost,
  //   (challengePhotoPost) => challengePhotoPost.likes,
  // )
  // challenegePhotoPost: ChallengePhotoPost;
}
