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
import { ChallengepostphotoService } from './challengepostphoto.service';
import { ChallengePhotoPostDto } from './dto/challengePostPhoto.dto';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('challengepostphoto')
@Controller('challengepostphoto')
export class ChallengepostphotoController {
  constructor(
    private readonly challengephotopostservice: ChallengepostphotoService,
  ) {}

  @Get()
  async findAll(): Promise<ChallengePhotoPostDto[]> {
    const challengePhotoPost = await this.challengephotopostservice.findAll();
    return challengePhotoPost;
  }

  @Post()
  async create(
    @Body() challengePhotoPostDto: ChallengePhotoPostDto,
  ): Promise<ChallengePhotoPostDto> {
    const challengePhotoPost = await this.challengephotopostservice.create(
      challengePhotoPostDto,
    );
    return challengePhotoPost;
  }

  @Get(':id')
  async findOne(
    @Param('id') id: number,
  ): Promise<ChallengePhotoPostDto | string> {
    const challenegePhotoPost = await this.challengephotopostservice.findOne(
      id,
    );
    return challenegePhotoPost;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() challengePhotoPostDto: ChallengePhotoPostDto,
  ): Promise<ChallengePhotoPostDto | any> {
    const updatedChallengePhotoPost =
      await this.challengephotopostservice.update(id, challengePhotoPostDto);
    return updatedChallengePhotoPost;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    const deletedChallengePhotoPost =
      await this.challengephotopostservice.delete(id);
    return deletedChallengePhotoPost;
  }
}
