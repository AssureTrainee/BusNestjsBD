import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString, MaxLength, IsUUID } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class ItineraryDto {
  @IsString({ message: 'description must be a string.' })
  @IsNotEmpty({ message: 'Please provide a name.' })
  @MaxLength(50)
  @ApiProperty({ type: String, description: 'description' })
  description: string;

  @IsNotEmpty({ message: 'Please provide a date.' })
  @ApiProperty({ type: Date, description: 'date' })
  date: Date;

  @ApiProperty({ type: UUID, description: 'driverId' })
  @IsUUID('all', { message: 'driver Id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a driver Id.' })
  driverId: string;

  @ApiProperty({ type: UUID, description: 'busId' })
  @IsUUID('all', { message: 'bus Id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a bus Id.' })
  busId: string;
}
