import { Injectable, NotFoundException } from '@nestjs/common';
import { Challenge } from './entities/challenge.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChallengeDto } from './dto/challenge.dto';

@Injectable()
export class ChallengeService {
  constructor(
    @InjectRepository(Challenge)
    private challengeRepository: Repository<Challenge>,
  ) {}

  async findAll(): Promise<ChallengeDto[] | string> {
    const challengs = await this.challengeRepository.find({
      relations: ['participants'],
    });

    if (!challengs) {
      throw new NotFoundException('There is no challenge');
    }
    return challengs;
  }

  async findOne(id: number): Promise<ChallengeDto | string> {
    const challenge = await this.challengeRepository.findOne({
      where: { id },
      relations: ['participants'],
    });

    if (!challenge) {
      throw new NotFoundException('There is no challenge with this id');
    }
    return challenge;
  }

  async create(challngeDto: ChallengeDto): Promise<ChallengeDto> {
    const challenge = this.challengeRepository.create(challngeDto);
    await this.challengeRepository.save(challenge);
    return challenge;
  }

  async update(
    id: number,
    challengeDto: ChallengeDto,
  ): Promise<ChallengeDto | string> {
    const challenge = this.challengeRepository.findOne({ where: { id } });
    if (!challenge) {
      throw new NotFoundException('challenge not found');
    }
    const updatedChallenge = { ...challenge, ...challengeDto };
    await this.challengeRepository.save(updatedChallenge);
    return updatedChallenge;
  }

  async delete(id: number): Promise<string> {
    const challenge = await this.challengeRepository.findOne({
      where: { id },
    });
    if (!challenge) {
      throw new NotFoundException('challenge not found');
    }
    await this.challengeRepository.delete(id);
    return `Challenge with id ${id} deleted`;
  }
}
