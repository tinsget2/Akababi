import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChallengePhotoLike } from './entities/challengephotolike.entity';
import { Repository } from 'typeorm';
import { ChallengePhotoLikeDto } from './dto/challengephotolike.dto';

@Injectable()
export class ChallengephotolikeService {
  constructor(
    @InjectRepository(ChallengePhotoLike)
    private challengePhotolikeRepository: Repository<ChallengePhotoLike>,
  ) {}

  async findAll(): Promise<ChallengePhotoLikeDto[]> {
    const challengephotolike = await this.challengePhotolikeRepository.find();
    return challengephotolike;
  }

  async create(
    challengePhotoLikeDto: ChallengePhotoLikeDto,
  ): Promise<ChallengePhotoLikeDto> {
    const challengephotolike = this.challengePhotolikeRepository.create(
      challengePhotoLikeDto,
    );
    await this.challengePhotolikeRepository.save(challengePhotoLikeDto);
    return challengephotolike;
  }

  async findOne(id: number): Promise<ChallengePhotoLikeDto | string> {
    const challengephotolike = await this.challengePhotolikeRepository.findOne({
      where: { id },
    });
    if (!challengephotolike) {
      throw new NotFoundException(
        'There is no challengephotolike with this id',
      );
    }
    console.log(challengephotolike);
    return challengephotolike;
  }

  async update(
    id: number,
    challengePhotoLikeDto: ChallengePhotoLikeDto,
  ): Promise<ChallengePhotoLikeDto | string> {
    const challengephotolike = await this.challengePhotolikeRepository.findOne({
      where: { id },
    });
    if (!challengephotolike) {
      throw new NotFoundException(
        'There is no challengephotolike with this id',
      );
    }
    const updatedChallengePhotoLike = {
      ...challengephotolike,
      ...challengePhotoLikeDto,
    };
    await this.challengePhotolikeRepository.save(updatedChallengePhotoLike);
    return updatedChallengePhotoLike;
  }

  async delete(id: number): Promise<string> {
    const challengephotolike = await this.challengePhotolikeRepository.findOne({
      where: { id },
    });
    if (!challengephotolike) {
      throw new NotFoundException(
        'There is no challengephotolike with this id',
      );
    }
    await this.challengePhotolikeRepository.delete(id);
    return `challengephotolike with id ${id} deleted`;
  }
}
