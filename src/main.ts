import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';





async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();




mongoose.connect("mongodb+srv://umairawan:iwMQBmlvuoCTOe4B@learner.h8nyweu.mongodb.net/")
   .then(() => {
      console.log('Connected to Database')
   }).catch((err) => {
      console.log(err)
   })