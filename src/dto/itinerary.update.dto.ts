import { ApiProperty } from '@nestjs/swagger';

import { IsDate, IsOptional, IsString, MaxLength } from 'class-validator';

export class ItineraryUpdateDto {
  @IsString({ message: 'description must be a string.' })
  @IsOptional()
  @MaxLength(50)
  @ApiProperty({ type: String, description: 'description' })
  description: string;

  @IsDate({ message: 'Please provide a date.' })
  @IsOptional()
  @ApiProperty({ type: Date, description: 'date' })
  date: Date;
}
