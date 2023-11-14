import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  content: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  likes: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  comments: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  shares: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  views: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  hashtags: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  mentions: string;
  //postAge: number;
}
