import { ConfigService } from '@nestjs/config/dist';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export async function typeormFactory(
  configService: ConfigService,
): Promise<TypeOrmModuleOptions> {
  return {
    type: 'mysql',
    host: configService.get('HOST'),
    port: +configService.get('DB_PORT'),
    username: configService.get('USERNAME'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABSE_NAME'),
    autoLoadEntities: true,
    synchronize: true, // only for development
  };
}
