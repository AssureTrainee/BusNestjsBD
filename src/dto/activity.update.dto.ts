import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsOptional } from 'class-validator';

export class ActivityUpdateDto {
  @IsDate()
  @IsOptional()
  @ApiProperty({ type: Date, description: 'departureTime' })
  departureTime: Date;

  @IsDate()
  @IsOptional()
  @ApiProperty({ type: String, description: 'arrivalTime' })
  arrivalTime: Date;

  @IsString({ message: 'Details must be a string.' })
  @IsOptional()
  @ApiProperty({ type: String, description: 'details' })
  details: string;
}
