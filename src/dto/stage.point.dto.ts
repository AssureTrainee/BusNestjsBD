import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsUUID,
  IsDate,
  IsNumber,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class StagePointDto {
  @IsDate({ message: 'Please provide a arrival time.' })
  @IsNotEmpty({ message: 'Please provide a arrival time.' })
  @ApiProperty({ type: Date, description: 'arrivalTime' })
  arrivalTime: Date;

  @IsString({ message: 'Location must be a string.' })
  @IsNotEmpty({ message: 'Please provide a location.' })
  @ApiProperty({ type: String, description: 'arrivalTime' })
  location: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Please provide a position.' })
  @ApiProperty({ type: Number, description: 'position' })
  position: number;

  @ApiProperty({ type: UUID, description: 'targetStagePointId' })
  @IsUUID('all', { message: 'Target stagePoint Id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a stage point id.' })
  stagePointId: string;

  @ApiProperty({ type: UUID, description: 'routeId' })
  @IsUUID('all', { message: 'Route id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a route id.' })
  routeId: string;
}
