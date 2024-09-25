import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import { LoggingInterceptor } from './logging/logging.interceptor';
import { LoggingService } from './logging/logging.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
<<<<<<< HEAD
    origin: 'http://185.182.186.58:5173',
=======
    origin: ['http://185.182.186.58:5173', 'http://localhost:5173'],
>>>>>>> b618e5f (ddelo)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: 'Content-Type, Authorization, X-Pays, X-IP, X-ISP, X-Browser, X-OS, X-USER',
    credentials: true,
  });
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
<<<<<<< HEAD
  const loggingService = app.get(LoggingService);
  app.useGlobalInterceptors(new LoggingInterceptor(loggingService));
=======
  //const loggingService = app.get(LoggingService);
  //app.useGlobalInterceptors(new LoggingInterceptor(loggingService));
>>>>>>> b618e5f (ddelo)

  const port = 4000;
  await app.listen(port);
}
<<<<<<< HEAD
bootstrap();
=======
bootstrap();
>>>>>>> b618e5f (ddelo)
