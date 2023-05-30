import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsNumber, IsNotEmpty } from 'class-validator';
import { UUID } from 'typeorm/driver/mongodb/bson.typings';

export class BusDto {
  @IsNumber()
  @IsNotEmpty({ message: 'Please provide a internal Bus.' })
  @ApiProperty({ type: Date, description: 'internalBus' })
  internalBus: number;

  @IsNumber()
  @IsNotEmpty({ message: 'Please provide a capacity.' })
  @ApiProperty({ type: String, description: 'capacity' })
  capacity: number;

  @IsString({ message: 'Status must be a string.' })
  @IsNotEmpty({ message: 'Please provide a status.' })
  @ApiProperty({ type: Number, description: 'status' })
  status: string;

  @ApiProperty({ type: UUID, description: 'ownerId' })
  @IsUUID('all', { message: 'owner id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a owner id.' })
  ownerId: string;
}
