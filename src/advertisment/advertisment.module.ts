import { Module } from '@nestjs/common';
import { Advertisment } from './entities/ad.entity';
import { AdvertismentController } from './advertisment.controller';
import { AdvertismentService } from './advertisment.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Advertisment])],
  controllers: [AdvertismentController],
  providers: [AdvertismentService],
})
export class AdvertismentModule {}
