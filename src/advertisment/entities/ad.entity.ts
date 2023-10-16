import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Advertisment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  catagory: string;

  @Column()
  price: number;

  @Column()
  contactEmail: string;
}
