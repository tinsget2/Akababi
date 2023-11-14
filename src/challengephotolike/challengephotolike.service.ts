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

  async findAll(): Promise<ChallengePhotoLikeDto[] | any> {
    try {
      const challengephotolike = await this.challengePhotolikeRepository.find();
      if (!challengephotolike) {
        throw new NotFoundException('There are no challengephotolike');
      }
      return challengephotolike;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async create(
    challengePhotoLikeDto: ChallengePhotoLikeDto,
  ): Promise<ChallengePhotoLikeDto | any> {
    try {
      const challengephotolike = this.challengePhotolikeRepository.create(
        challengePhotoLikeDto,
      );
      await this.challengePhotolikeRepository.save(challengePhotoLikeDto);
      return challengephotolike;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async findOne(id: number): Promise<ChallengePhotoLikeDto | any> {
    try {
      const challengephotolike =
        await this.challengePhotolikeRepository.findOne({
          where: { id },
        });
      if (!challengephotolike) {
        throw new NotFoundException(
          'There is no challengephotolike with this id',
        );
      }
      console.log(challengephotolike);
      return challengephotolike;
    } catch (error) {
      return { message: `Something went wrong ${error.message}` };
    }
  }

  async update(
    id: number,
    challengePhotoLikeDto: ChallengePhotoLikeDto,
  ): Promise<ChallengePhotoLikeDto | any> {
    try {
      const challengephotolike =
        await this.challengePhotolikeRepository.findOne({
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
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async delete(id: number): Promise<string | any> {
    try {
      const challengephotolike =
        await this.challengePhotolikeRepository.findOne({
          where: { id },
        });
      if (!challengephotolike) {
        throw new NotFoundException(
          'There is no challengephotolike with this id',
        );
      }
      await this.challengePhotolikeRepository.delete(id);
      return `challengephotolike with id ${id} deleted`;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }
}
