import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CommentDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  comment: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  challengeId: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}
