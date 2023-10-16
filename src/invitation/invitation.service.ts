import { Injectable, NotFoundException } from '@nestjs/common';
import { Invitation } from './entities/invitation.entity';
import { Not, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { InvitationDto } from './dto/invitation.dto';

@Injectable()
export class InvitationService {
  constructor(
    @InjectRepository(Invitation)
    private readonly invitationRepository: Repository<Invitation>,
  ) {}
  async create(invitationDto: InvitationDto): Promise<InvitationDto> {
    const newInvitation = this.invitationRepository.create(invitationDto);
    await this.invitationRepository.save(invitationDto);
    return newInvitation;
  }

  async findAll(): Promise<InvitationDto[]> {
    const invitations = await this.invitationRepository.find();
    return invitations;
  }

  async findOne(id: number): Promise<InvitationDto | string> {
    const invitation = await this.invitationRepository.findOne({
      where: { id },
    });
    if (!invitation) {
      throw new NotFoundException(`Invitation with id ${id} not found`);
    }
    return invitation;
  }

  async update(
    id: number,
    invitationDto: InvitationDto,
  ): Promise<InvitationDto | string> {
    const invitation = await this.invitationRepository.findOne({
      where: { id },
    });
    if (!invitation) {
      throw new NotFoundException(`Invitation with id ${id} not found`);
    }
    await this.invitationRepository.update(id, invitationDto);
    return invitation;
  }

  async delete(id: number): Promise<string> {
    const invitation = await this.invitationRepository.findOne({
      where: { id },
    });
    if (!invitation) {
      throw new NotFoundException(`Invitation with id ${id} not found`);
    }
    await this.invitationRepository.delete(id);
    return `Invitation with id ${id} deleted`;
  }
}
