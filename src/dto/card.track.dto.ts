import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class CardTrackDto {
  @IsString({ message: 'Code must be a string.' })
  @IsNotEmpty({ message: 'Please provide a code.' })
  @ApiProperty({ type: String, description: 'code' })
  code: string;

  @IsString({ message: 'Details must be a string.' })
  @IsNotEmpty({ message: 'Please provide a details.' })
  @ApiProperty({ type: String, description: 'details' })
  details: string;

  @IsString({ message: 'Status must be a string.' })
  @IsNotEmpty({ message: 'Please provide a status.' })
  @ApiProperty({ type: String, description: 'status' })
  status: string;

  @IsNotEmpty({ message: 'Please provide a departure time.' })
  @ApiProperty({ type: String, description: 'departureTime' })
  departureTime: string;

  @IsNotEmpty({ message: 'Please provide a arrival time.' })
  @ApiProperty({ type: String, description: 'arrivalTime' })
  arrivalTime: string;

  @ApiProperty({ type: UUID, description: 'activityId' })
  @IsUUID('all', { message: 'Activity id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a activity id.' })
  activityId: string;
}
