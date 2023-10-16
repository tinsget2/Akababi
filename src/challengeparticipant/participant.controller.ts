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
import { ParticipantService } from './participant.service';
import { ParticipantDto } from './dto/challengeparticipant.dto';

@Controller('participant')
export class ParticipantController {
  constructor(private readonly participantService: ParticipantService) {}

  @Get()
  async findAll(): Promise<ParticipantDto[]> {
    const participants = await this.participantService.findAll();
    return participants;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<ParticipantDto | string> {
    const participant = await this.participantService.findOne(id);
    return participant;
  }

  @Post()
  async create(
    @Body() participantDto: ParticipantDto,
  ): Promise<ParticipantDto> {
    const participant = await this.participantService.create(participantDto);
    return participant;
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    participantDto: ParticipantDto,
  ): Promise<ParticipantDto | string> {
    const updatedParticipant = await this.participantService.update(
      id,
      participantDto,
    );
    return updatedParticipant;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    const deletedParticipant = await this.participantService.delete(id);
    return deletedParticipant;
  }
}
