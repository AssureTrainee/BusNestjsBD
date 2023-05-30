import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class ActivityDto {
  @IsNotEmpty({ message: 'Please provide a departure time.' })
  @ApiProperty({ type: Date, description: 'departureTime' })
  departureTime: string;

  @IsNotEmpty({ message: 'Please provide a arrival time.' })
  @ApiProperty({ type: String, description: 'arrivalTime' })
  arrivalTime: string;

  @IsString({ message: 'Details must be a string.' })
  @IsNotEmpty({ message: 'Please provide a detail.' })
  @ApiProperty({ type: String, description: 'details' })
  details: string;

  @ApiProperty({ type: UUID, description: 'itineraryId' })
  @IsUUID('all', { message: 'Person Id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a itinerary id.' })
  itineraryId: string;

  @ApiProperty({ type: UUID, description: 'routeId' })
  @IsUUID('all', { message: 'Person Id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a route id.' })
  routeId: string;
}
