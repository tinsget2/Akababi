import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Advertisment } from './entities/ad.entity';
import { Repository } from 'typeorm';
import { AdvertismentDto } from './dto/ad.dto';

@Injectable()
export class AdvertismentService {
  constructor(
    @InjectRepository(Advertisment)
    private advertisment: Repository<Advertisment>,
  ) {}

  async findAll(): Promise<AdvertismentDto[]> {
    const advertisments = await this.advertisment.find();
    return advertisments;
  }

  async findOne(id: number): Promise<AdvertismentDto> {
    const advertisment = await this.advertisment.findOne({ where: { id } });
    return this.toDTO(advertisment);
  }

  async create(advertismentDto: AdvertismentDto): Promise<AdvertismentDto> {
    const advertisment = this.advertisment.create(advertismentDto);
    await this.advertisment.save(advertisment);
    return advertisment;
  }

  private toDTO(ad: Advertisment): AdvertismentDto {
    const { id, title, description, price, catagory, contactEmail } = ad;
    return { id, title, description, price, catagory, contactEmail };
  }

  async update(
    id: number,
    advertismentDto: AdvertismentDto,
  ): Promise<AdvertismentDto> {
    const advertisment = await this.advertisment.findOne({ where: { id } });
    this.advertisment.merge(advertisment, advertismentDto);
    await this.advertisment.save(advertisment);
    return advertisment;
  }
}
