import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configure CORS for API
  app.enableCors({
    origin: 'http://localhost:5173', // Remplace par l'URL de ton frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Si nécessaire
  });

  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const port = 4000;
  await app.listen(port);
}
bootstrap();
