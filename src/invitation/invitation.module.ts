import { Module } from '@nestjs/common';
import { Invitation } from './entities/invitation.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvitationController } from './invitation.controller';
import { InvitationService } from './invitation.service';

@Module({
  imports: [TypeOrmModule.forFeature([Invitation])],
  controllers: [InvitationController],
  providers: [InvitationService],
})
export class InvitationModule {}
