import { Module } from '@nestjs/common';
import { MapsController } from './maps.controller';
import { MapsService } from './maps.service';
import { Schema, MongooseModule } from '@nestjs/mongoose';
import { Measurement, MeasurementModel } from './maps.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Measurement.name,
        schema: MeasurementModel,
        collection: 'measurements_collection',
      },
    ]),
  ],
  controllers: [MapsController],
  providers: [MapsService],
})
export class MapsModule {}
