import { ChallengePhotoPost } from 'src/challengepostphoto/entities/challenge_post_photo.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ChallengePhotoLike {
  @PrimaryGeneratedColumn()
  id: number;
  // @Column()
  // challengeId: number;

  // @Column()
  // photoUrl: string;

  @Column({ default: 0 })
  like: number;

  @ManyToOne(
    () => ChallengePhotoPost,
    (challengePhotoPost) => challengePhotoPost.challengePhotoLike,
  )
  challengePhotoPost: ChallengePhotoPost;

  @Column()
  challengePhotoPostId: number;

  @ManyToOne(() => User, (user) => user.challengePhotoLikes)
  user: User;

  @Column()
  userId: number;
}
