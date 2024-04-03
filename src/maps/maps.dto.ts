
import { IsString,IsNumber, IsOptional, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';

export class PointDto {
  @IsNumber()
  lat: number;

  @IsNumber()
  lng: number;
}


export class MapsDTO{
  @IsString()
  placeId: string;

  @IsString()
  address: string;

  @ValidateNested()
  @Type(() => PointDto)
  mapCenter: PointDto;

  @IsNumber()
  mapZoom: number;

}