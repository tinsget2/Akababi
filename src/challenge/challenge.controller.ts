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
import { ChallengeDto } from './dto/challenge.dto';
import { ChallengeService } from './challenge.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('challneges')
@Controller('challenge')
export class ChallengeController {
  constructor(private readonly challengeService: ChallengeService) {}

  @Get()
  async findAll() {
    const challengs = await this.challengeService.findAll();
    return challengs;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const challenge = await this.challengeService.findOne(id);
    return challenge;
  }

  @Post()
  async create(@Body() challegeDto: ChallengeDto) {
    const challenge = await this.challengeService.create(challegeDto);
    return challenge;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    challegeDto: ChallengeDto,
  ): Promise<ChallengeDto | any> {
    const updatedChallenge = await this.challengeService.update(
      id,
      challegeDto,
    );
    return updatedChallenge;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    const deletedChallenge = await this.challengeService.delete(id);
    return deletedChallenge;
  }
}
