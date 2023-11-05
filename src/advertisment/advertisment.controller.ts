import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { AdvertismentService } from './advertisment.service';
import { AdvertismentDto } from './dto/ad.dto';
import { Advertisment } from './entities/ad.entity';

@Controller('advertisment')
export class AdvertismentController {
  constructor(private readonly advertismentService: AdvertismentService) {}

  @Get()
  async findAll(): Promise<AdvertismentDto[]> {
    const advertisments = await this.advertismentService.findAll();
    return advertisments;
  }

  @Post()
  async create(
    @Body() advertismentDto: AdvertismentDto,
  ): Promise<AdvertismentDto> {
    const advertisment = await this.advertismentService.create(advertismentDto);
    return advertisment;
  }

  @Get(':id')
  async findOne(id: number): Promise<AdvertismentDto> {
    const advertisment = await this.advertismentService.findOne(id);
    return advertisment;
  }

  @Patch(':id')
  async update(
    @Body() advertismentDto: AdvertismentDto,
    @Param('id') id: number,
  ): Promise<AdvertismentDto> {
    const advertisment = await this.advertismentService.update(
      id,
      advertismentDto,
    );
    return advertisment;
  }
}
