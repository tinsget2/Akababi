import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChallengeParticipant } from './entities/challengeparticipant.entity';
import { ParticipantController } from './participant.controller';
import { ParticipantService } from './participant.service';

@Module({
  imports: [TypeOrmModule.forFeature([ChallengeParticipant])],
  controllers: [ParticipantController],
  providers: [ParticipantService],
})
export class ParticipantModule {}
