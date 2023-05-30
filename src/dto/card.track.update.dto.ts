import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CardTrackUpdateDto {
  @IsString({ message: 'Code must be a string.' })
  @IsOptional()
  @ApiProperty({ type: String, description: 'code' })
  code: string;

  @IsString({ message: 'Details must be a string.' })
  @IsOptional()
  @ApiProperty({ type: String, description: 'details' })
  details: string;

  @IsString({ message: 'Status must be a string.' })
  @IsNotEmpty({ message: 'Please provide a status.' })
  @ApiProperty({ type: String, description: 'status' })
  status: string;

  @IsOptional()
  @ApiProperty({ type: String, description: 'departureTime' })
  departureTime: string;

  @IsOptional()
  @ApiProperty({ type: String, description: 'arrivalTime' })
  arrivalTime: string;
}
