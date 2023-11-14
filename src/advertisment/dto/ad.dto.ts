import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AdvertismentDto {
  id: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  title: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  description: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  catagory: string;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsNumber()
  price: number;
  @ApiProperty({ required: true })
  @IsNotEmpty()
  @IsString()
  contactEmail: string;
}
