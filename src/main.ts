/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  const options = new DocumentBuilder()
    .setTitle("API Documentation")
    .setDescription("Swagger based API docs for each endpoint")
    .setVersion("1.0")
    .addTag("API")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("api", app, document);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
app.set('json spaces', 2);
  await app.listen(3002);
}
bootstrap();
