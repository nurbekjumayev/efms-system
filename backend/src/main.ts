import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS since frontend is on Vite (port 5173 usually) and backend will be on port 3000
  app.enableCors();
  
  await app.listen(3000);
  console.log('EFMS Backend Application is running on: http://localhost:3000');
}
bootstrap();
