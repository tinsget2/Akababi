import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChallengeModule } from './challenge/challenge.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParticipantModule } from './challengeparticipant/participant.module';
import { InvitationModule } from './invitation/invitation.module';
import { ChallengepostphotoModule } from './challengepostphoto/challengepostphoto.module';
import { ChallengephotolikeModule } from './challengephotolike/challengephotolike.module';
import { AdvertismentModule } from './advertisment/advertisment.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 6033,
      username: 'root',
      password: 'my_secret_password',
      database: 'Jagama',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ChallengeModule,
    ParticipantModule,
    InvitationModule,
    ChallengepostphotoModule,
    ChallengepostphotoModule,
    ChallengephotolikeModule,
    AdvertismentModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
