import { Body, Controller, Get, Post } from '@nestjs/common';
import { AdvertismentService } from './advertisment.service';
import { AdvertismentDto } from './dto/ad.dto';
import { Advertisment } from './entities/ad.entity';

@Controller('advertisment')
export class AdvertismentController {
  constructor(private readonly advertismentService: AdvertismentService) {}

  @Get()
  async findAll(): Promise<AdvertismentDto[]> {
    const advertisments = await this.advertismentService.findAll();
    return advertisments.map((ad) => this.toDTO(ad));
  }

  @Post()
  async create(
    @Body() advertismentDto: AdvertismentDto,
  ): Promise<AdvertismentDto> {
    const advertisment = await this.advertismentService.create(advertismentDto);
    return advertisment;
  }

  private toDTO(ad: Advertisment): AdvertismentDto {
    const { id, title, description, price, catagory, contactEmail } = ad;
    return { id, title, description, price, catagory, contactEmail };
  }
}
