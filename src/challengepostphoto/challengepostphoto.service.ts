import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChallengePhotoPost } from './entities/challenge_post_photo.entity';
import { ChallengePhotoPostDto } from './dto/challengePostPhoto.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ChallengepostphotoService {
  constructor(
    @InjectRepository(ChallengePhotoPost)
    private challengePhotoPostRepository: Repository<ChallengePhotoPost>,
  ) {}

  async findAll(): Promise<ChallengePhotoPostDto[] | any> {
    try {
      const challengePhotoPost = await this.challengePhotoPostRepository.find({
        relations: ['challengePhotoLike', 'challengeParticipant'],
      });
      if (!challengePhotoPost) {
        throw new NotFoundException('There are no contents');
      }
      return challengePhotoPost;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async findOne(id: number): Promise<ChallengePhotoPostDto | any> {
    try {
      const challengePhotoPost =
        await this.challengePhotoPostRepository.findOne({
          where: { id },
          relations: ['challengePhotoLike'],
        });
      if (!challengePhotoPost) {
        throw new NotFoundException('There Is no content with this id');
      }
      return challengePhotoPost;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async create(
    challengePhotoPost: ChallengePhotoPostDto,
  ): Promise<ChallengePhotoPost | any> {
    try {
      const challenegPhotoPost =
        this.challengePhotoPostRepository.create(challengePhotoPost);
      await this.challengePhotoPostRepository.save(challenegPhotoPost);
      return challenegPhotoPost;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async update(id: number, challengePhotoPost: ChallengePhotoPostDto) {
    try {
      const challengePhotoPostToUpdate =
        await this.challengePhotoPostRepository.findOne({ where: { id } });
      if (!challengePhotoPostToUpdate) {
        throw new NotFoundException('There is no content with this id');
      }
      const updatedChallengePhotoPost = {
        ...challengePhotoPostToUpdate,
        ...challengePhotoPost,
      };
      await this.challengePhotoPostRepository.save(updatedChallengePhotoPost);
      return updatedChallengePhotoPost;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }

  async delete(id: number): Promise<string | any> {
    try {
      const challengePhotoPost =
        await this.challengePhotoPostRepository.findOne({
          where: { id },
        });
      if (!challengePhotoPost) {
        throw new NotFoundException('There is no content with this id');
      }
      await this.challengePhotoPostRepository.delete(id);
      return `Content with id ${id} deleted`;
    } catch (error) {
      return {
        message: `Something went wrong ${error.message}`,
      };
    }
  }
}
