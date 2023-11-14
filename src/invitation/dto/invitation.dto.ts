import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class InvitationDto {
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
  @IsString()
  invitationStatus: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  challengeId: number;
}
