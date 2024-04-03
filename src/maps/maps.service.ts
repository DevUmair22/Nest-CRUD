import { BadRequestException, Controller, Injectable } from '@nestjs/common';
import { Measurement } from './maps.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MapsService {
  constructor(
    @InjectModel(Measurement.name)
    private readonly measurementModel: Model<Measurement>,
  ) {}

  async findAllMaps(): Promise<Measurement[]> {
    return this.measurementModel.find().exec();
  }

  async addMaps(measurement: Measurement): Promise<Measurement> {
    try {
      const newmap = await this.measurementModel.create(measurement);
      return newmap;

    } catch (err) 
    {
      throw new BadRequestException('Error occured',err.message)
    }
  }
}
