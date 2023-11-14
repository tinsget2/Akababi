import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class ChallengePhotoLikeDto {
  id: number;
  //challengeId: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  userId: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  like: number;
  // photoUrl: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  challengePhotoPostId: number;
}
