import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { MapsController } from './maps/maps.controller';
import { MapsModule } from './maps/maps.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://umairawan:iwMQBmlvuoCTOe4B@learner.h8nyweu.mongodb.net/'),MapsModule],

})
export class AppModule {}
