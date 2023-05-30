import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional } from 'class-validator';

export class BusUpdateDto {
  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: Date, description: 'internalBus' })
  internalBus: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ type: String, description: 'capacity' })
  capacity: number;

  @IsString({ message: 'Status must be a string.' })
  @IsOptional()
  @ApiProperty({ type: Number, description: 'status' })
  status: string;
}
