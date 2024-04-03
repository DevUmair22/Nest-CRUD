import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';




  @Schema({ _id: false })
  export class Point {
    @Prop({ required: true, type: Number })
    lat: number;
    @Prop({ required: true, type: Number })
    lng: number;
  }
  export const PointModel = SchemaFactory.createForClass(Point); 
  
  @Schema({ _id: false })
  export class MeasurementPolygon {
  
    @Prop({ required: true, type: [[PointModel]] })
    points: [Point[]]; // i.e => [[Point, Point], [Point, Point]]
  }
  
  
  export const MeasurementPolygonModel =
    SchemaFactory.createForClass(MeasurementPolygon);

@Schema({ timestamps: true })
export class Measurement {
  @Prop({ required: true, type: String })
  placeId: string;

  @Prop({ required: true, type: String })
  address: string;

  @Prop({ required: true, type: PointModel })
  mapCenter: Point;

  @Prop({ required: true, default: 20 })
  mapZoom: number;

  // @Prop({ required: true, type: [MeasurementPolygonModel] })
  // polygons: MeasurementPolygon[];
}
export const MeasurementModel = SchemaFactory.createForClass(Measurement);


