import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';

export class ActivityUpdateDto {
  @IsOptional()
  @ApiProperty({ type: Date, description: 'departureTime' })
  departureTime: string;

  @IsOptional()
  @ApiProperty({ type: String, description: 'arrivalTime' })
  arrivalTime: string;

  @IsString({ message: 'Details must be a string.' })
  @IsOptional()
  @ApiProperty({ type: String, description: 'details' })
  details: string;
}
