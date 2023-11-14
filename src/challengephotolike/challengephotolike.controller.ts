import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ChallengephotolikeService } from './challengephotolike.service';
import { ChallengePhotoLikeDto } from './dto/challengephotolike.dto';
import { ChallengePhotoLike } from './entities/challengephotolike.entity';
import { async } from 'rxjs';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('challengephotolike')
@Controller('challengephotolike')
export class ChallengephotolikeController {
  constructor(
    private readonly challengePhotoLikeService: ChallengephotolikeService,
  ) {}
  @Get()
  async findAll(): Promise<ChallengePhotoLikeDto[]> {
    const likes = await this.challengePhotoLikeService.findAll();
    return likes;
  }

  @Post()
  async create(
    @Body() challngePhotoLikeDto: ChallengePhotoLikeDto,
  ): Promise<ChallengePhotoLikeDto> {
    const like = await this.challengePhotoLikeService.create(
      challngePhotoLikeDto,
    );
    return like;
  }

  @Get(':id')
  async findOne(
    @Param('id') id: number,
  ): Promise<ChallengePhotoLikeDto | string> {
    const like = await this.challengePhotoLikeService.findOne(id);
    return like;
  }

  @Patch(':id')
  async update(
    id: number,
    challengePhotoLikeDto: ChallengePhotoLikeDto,
  ): Promise<ChallengePhotoLikeDto | string> {
    const updatedLike = await this.challengePhotoLikeService.update(
      id,
      challengePhotoLikeDto,
    );
    return updatedLike;
  }

  @Delete(':id')
  async delete(id: number): Promise<string> {
    const deletedLike = await this.challengePhotoLikeService.delete(id);
    return deletedLike;
  }
}
