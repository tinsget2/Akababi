import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  likes: number;

  @Column()
  comments: number;

  @Column()
  shares: number;

  @Column()
  views: number;

  @Column()
  hashtags: string;

  @Column()
  mentions: string;

  @Column()
  postAge: number;
}
