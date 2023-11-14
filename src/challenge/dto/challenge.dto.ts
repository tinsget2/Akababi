import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ChallengeDto {
  id: number;
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  name: string;
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  description: string;
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  category: string;
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  prize: string;
  @ApiProperty({ required: true })
  @IsDate()
  @IsNotEmpty()
  startDate: Date;
  @ApiProperty({ required: true })
  @IsDate()
  @IsNotEmpty()
  endDate: Date;
  @ApiProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  invitationLink: string;
  @ApiProperty({ required: true })
  @IsNumber()
  @IsNotEmpty()
  userId: number;
}
