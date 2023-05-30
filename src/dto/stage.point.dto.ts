import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsUUID,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class StagePointDto {
  @IsNotEmpty({ message: 'Please provide a arrival time.' })
  @ApiProperty({ type: Date, description: 'arrivalTime' })
  arrivalTime: string;

  @IsString({ message: 'Location must be a string.' })
  @IsNotEmpty({ message: 'Please provide a location.' })
  @ApiProperty({ type: String, description: 'arrivalTime' })
  location: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Please provide a position.' })
  @ApiProperty({ type: Number, description: 'position' })
  position: number;

  @ApiProperty({ type: UUID, description: 'targetStagePointId' })
  @IsOptional()
  stagePointId: string;

  @ApiProperty({ type: UUID, description: 'routeId' })
  @IsUUID('all', { message: 'Route id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a route id.' })
  routeId: string;
}
