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
import { InvitationService } from './invitation.service';
import { InvitationDto } from './dto/invitation.dto';

@Controller('invitation')
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  @Post()
  async create(@Body() invitationDto: InvitationDto): Promise<InvitationDto> {
    const invitation = await this.invitationService.create(invitationDto);
    return invitation;
  }

  @Get()
  async findAll(): Promise<InvitationDto[]> {
    const invitations = await this.invitationService.findAll();
    return invitations;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<InvitationDto | string> {
    const invitation = await this.invitationService.findOne(id);
    return invitation;
  }

  @Patch(':id')
  async update(@Param('id') id: number, invitationDto: InvitationDto) {
    const updatedInvitation = await this.invitationService.update(
      id,
      invitationDto,
    );
    return updatedInvitation;
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<string> {
    const deletedInvitation = await this.invitationService.delete(id);
    return deletedInvitation;
  }
}
