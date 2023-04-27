/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoService } from './mongo/mongo.service';
import { PersonsController } from './persons/persons.controller';
import { PersonsService } from './persons/persons.service';
import { JwtcreateService } from './jwtcreate/jwtcreate.service';
import { MiddlewareService } from './jwtcreate/middleware.service';
import { TokengenController } from './jwtcreate/tokengen.controller';

@Module({
  imports: [],
  controllers: [AppController, PersonsController, TokengenController],
  providers: [AppService, MongoService, PersonsService, JwtcreateService, MiddlewareService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer.apply(MiddlewareService).forRoutes(
      PersonsController
    )
  }
}
