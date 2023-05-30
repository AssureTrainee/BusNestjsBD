import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsDate,
  IsNumber,
  IsOptional,
} from 'class-validator';
import { RouteEntity } from 'src/persistance/route.entity';
import { StagePointEntity } from 'src/persistance/stage.point.entity';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class StagePointDto {
  @IsDate({ message: 'Please provide a arrival time.' })
  @IsOptional()
  @ApiProperty({ type: Date, description: 'arrivalTime' })
  arrivalTime: Date;

  @IsString({ message: 'Location must be a string.' })
  @IsOptional()
  @ApiProperty({ type: String, description: 'arrivalTime' })
  location: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number, description: 'position' })
  position: number;

  @ApiProperty({ type: UUID, description: 'targetStagePointId' })
  @IsUUID('all', { message: 'Target stagePoint Id must be of type id.' })
  @IsOptional()
  stagePointId: string;

  @ApiProperty({ type: UUID, description: 'routeId' })
  @IsUUID('all', { message: 'Route id must be of type id.' })
  @IsOptional()
  routeId: string;
}
