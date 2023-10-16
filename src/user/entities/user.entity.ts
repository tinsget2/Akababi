import { Challenge } from 'src/challenge/entities/challenge.entity';
import { ChallengePhotoLike } from 'src/challengephotolike/entities/challengephotolike.entity';
import { ChallengePhotoPost } from 'src/challengepostphoto/entities/challenge_post_photo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  phone: string;
  @OneToMany(() => Challenge, (challenge) => challenge.user)
  challenges: Challenge[];

  @OneToMany(
    () => ChallengePhotoLike,
    (challengePhotoLike) => challengePhotoLike.user,
  )
  challengePhotoLikes: ChallengePhotoLike[];
}
