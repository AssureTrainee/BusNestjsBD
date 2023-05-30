import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsNumber, IsOptional } from 'class-validator';

export class StagePointUpdateDto {
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
}
