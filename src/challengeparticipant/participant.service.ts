import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ChallengeParticipant } from './entities/challengeparticipant.entity';
import { Repository } from 'typeorm';
import { ParticipantDto } from './dto/challengeparticipant.dto';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(ChallengeParticipant)
    private participantRepository: Repository<ChallengeParticipant>,
  ) {}

  async findAll(): Promise<ParticipantDto[]> {
    const participants = await this.participantRepository.find({
      relations: ['challenge'],
    });
    // const participantDtos = participants.map((participant) => ({
    //   id: participant.id,
    //   userId: participant.userId,
    //   challenge: participant.challenge.id,
    // }));

    if (!participants) {
      throw new NotFoundException('There are no participants');
    }
    return participants;
  }

  async findOne(id: number): Promise<ParticipantDto | string> {
    const participant = await this.participantRepository.findOne({
      where: { id },
      relations: ['challenge'],
    });
    if (!participant) {
      throw new NotFoundException('There is no Participant with this id');
    }
    return participant;
  }

  async create(participantDto: ParticipantDto): Promise<ParticipantDto> {
    const participant = this.participantRepository.create(participantDto);
    await this.participantRepository.save(participant);
    return participant;
  }

  async update(
    id: number,
    participantDto: ParticipantDto,
  ): Promise<ParticipantDto | string> {
    const participant = await this.participantRepository.findOne({
      where: { id },
    });
    if (!participant) {
      throw new NotAcceptableException('participant not found');
    }
    const updatedParticipant = { ...participant, participantDto };
    await this.participantRepository.save(updatedParticipant);
    return updatedParticipant;
  }

  async delete(id: number): Promise<string> {
    const participant = await this.participantRepository.findOne({
      where: { id },
    });
    if (!participant) {
      throw new NotFoundException('Participant not found');
    }
    await this.participantRepository.delete(id);
    return `Participant with id ${id} deleted`;
  }
}
