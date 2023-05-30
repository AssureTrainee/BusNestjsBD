import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class StagePointUpdateDto {
  @IsOptional()
  @ApiProperty({ type: Date, description: 'arrivalTime' })
  arrivalTime: string;

  @IsString({ message: 'Location must be a string.' })
  @IsOptional()
  @ApiProperty({ type: String, description: 'arrivalTime' })
  location: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Number, description: 'position' })
  position: number;
}
