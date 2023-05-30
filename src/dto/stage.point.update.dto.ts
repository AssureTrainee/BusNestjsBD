import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsDate,
  IsNumber,
} from 'class-validator';
import { RouteEntity } from 'src/persistance/route.entity';
import { StagePointEntity } from 'src/persistance/stage.point.entity';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class StagePointUpdateDto {
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
}
