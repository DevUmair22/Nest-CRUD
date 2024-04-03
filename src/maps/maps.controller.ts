import { Body, Controller, Get, Post } from "@nestjs/common";
import { get } from "http";
import { MapsService } from "./maps.service";
import { Measurement } from "./maps.schema";
import { MapsDTO } from "./maps.dto";



@Controller('maps')

export class MapsController{

  constructor(private mapservice: MapsService) {}

@Get()
async findAll():Promise<Measurement[]>{
return this.mapservice.findAllMaps()

}

@Post()
async create( @Body() body:MapsDTO):Promise<Measurement>
{
  console.log({body})
  return this.mapservice.addMaps(body)
}
  
}
