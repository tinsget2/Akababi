import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ChallengePhotoPostDto {
  id: number;
  //challengeId: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  challengePhotoUrl: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  challengeParticipantId: number;
  // userId: number;
}
