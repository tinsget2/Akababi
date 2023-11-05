import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  id: number;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  phone: string;

  //initiatedChallenges: ChallengeDto[];
}
