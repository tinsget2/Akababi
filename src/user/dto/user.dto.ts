import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  id: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  phone: string;

  //initiatedChallenges: ChallengeDto[];
}
