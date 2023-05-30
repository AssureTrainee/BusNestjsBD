import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, IsNumber } from 'class-validator';

export class RouteDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }): string => value?.trim())
  @MaxLength(50)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }): string => value?.trim())
  @MaxLength(10)
  status: string;

  @IsNotEmpty()
  @IsNumber()
  length: number;
}
