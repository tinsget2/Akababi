import { Challenge } from 'src/challenge/entities/challenge.entity';
import { ChallengePhotoLike } from 'src/challengephotolike/entities/challengephotolike.entity';
import { Comment } from 'src/comment/entities/comment.entitiy';
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

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(
    () => ChallengePhotoLike,
    (challengePhotoLike) => challengePhotoLike.user,
  )
  challengePhotoLikes: ChallengePhotoLike[];
}
