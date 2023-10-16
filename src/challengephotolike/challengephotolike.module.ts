import { Module } from '@nestjs/common';
import { ChallengePhotoLike } from './entities/challengephotolike.entity';
import { ChallengephotolikeController } from './challengephotolike.controller';
import { ChallengephotolikeService } from './challengephotolike.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ChallengePhotoLike])],
  controllers: [ChallengephotolikeController],
  providers: [ChallengephotolikeService],
})
export class ChallengephotolikeModule {}
