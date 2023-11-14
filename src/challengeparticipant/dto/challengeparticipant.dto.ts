import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Challenge } from 'src/challenge/entities/challenge.entity';

export class ParticipantDto {
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  id: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  userId: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  challengeId: number;
}
