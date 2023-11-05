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
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { PostsModule } from './posts/posts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),

    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: configService.get('DATABASE_TYPE') as any | 'mysql',
        host: configService.get('HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME').toString(),
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),

    ChallengeModule,
    ParticipantModule,
    InvitationModule,
    ChallengepostphotoModule,
    ChallengepostphotoModule,
    ChallengephotolikeModule,
    AdvertismentModule,
    UserModule,
    CommentModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
