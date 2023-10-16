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

  async findAll(): Promise<ChallengePhotoPostDto[]> {
    const challengePhotoPost = await this.challengePhotoPostRepository.find({
      relations: ['challengePhotoLike'],
    });
    return challengePhotoPost;
  }

  async findOne(id: number): Promise<ChallengePhotoPostDto | string> {
    const challengePhotoPost = await this.challengePhotoPostRepository.findOne({
      where: { id },
      relations: ['challengePhotoLike'],
    });
    if (!challengePhotoPost) {
      throw new NotFoundException('There Is no content with this id');
    }
    return challengePhotoPost;
  }

  async create(
    challengePhotoPost: ChallengePhotoPostDto,
  ): Promise<ChallengePhotoPost> {
    const challenegPhotoPost =
      this.challengePhotoPostRepository.create(challengePhotoPost);
    await this.challengePhotoPostRepository.save(challenegPhotoPost);
    return challenegPhotoPost;
  }

  async update(id: number, challengePhotoPost: ChallengePhotoPostDto) {
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
  }

  async delete(id: number): Promise<string> {
    const challengePhotoPost = await this.challengePhotoPostRepository.findOne({
      where: { id },
    });
    if (!challengePhotoPost) {
      throw new NotFoundException('There is no content with this id');
    }
    await this.challengePhotoPostRepository.delete(id);
    return `Content with id ${id} deleted`;
  }
}
