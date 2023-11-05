import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { HttpExceptionFilter } from './utils/Excepetion.filter';
import { ValidationPipe } from '@nestjs/common';
import { configDotenv } from 'dotenv';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  dotenv.config();
  app.useGlobalPipes(new ValidationPipe());

  //  app.useGlobalFilters(new HttpExceptionFilter());
  const port = configService.get('PORT');
  const config = new DocumentBuilder()
    .setTitle('Akababi API')
    .setDescription('This is an  API Documentation for Akakabi challenge API')
    .setVersion('1.0')
    .addTag('Akababi')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`Application is running on: ${port}`);
}
bootstrap();
