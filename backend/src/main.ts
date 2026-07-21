import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  // Global Validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  // Global API Prefix
  app.setGlobalPrefix('api');

  // Enable CORS
  app.enableCors({
    origin: true,
    credentials: true,
  });

 const config = new DocumentBuilder()
  .setTitle('RevenueFlow API')
  .setDescription('RevenueFlow Backend API')
  .setVersion('1.0')
  .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(
  app,
  config,
);

SwaggerModule.setup('docs', app, document);
  const port = process.env.PORT || 3000;

  await app.listen(port);

  console.log(`🚀 RevenueFlow Backend running on http://localhost:${port}`);
}

bootstrap();
