import { Module } from '@nestjs/common';
import { ChallengePhotoPost } from './entities/challenge_post_photo.entity';
import { ChallengepostphotoController } from './challengepostphoto.controller';
import { ChallengepostphotoService } from './challengepostphoto.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ChallengePhotoPost])],
  controllers: [ChallengepostphotoController],
  providers: [ChallengepostphotoService],
})
export class ChallengepostphotoModule {}
