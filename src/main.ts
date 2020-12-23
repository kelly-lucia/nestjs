import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const options = new DocumentBuilder()
    .setTitle('interface')
    .setDescription('后台管理系统相关接口')
    .setVersion('1.0.0')
    .addTag('用户')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  // 访问地址 http://localhost:8090/api/#/
  SwaggerModule.setup('/api', app, document);
  await app.listen(8090);
}
bootstrap();
