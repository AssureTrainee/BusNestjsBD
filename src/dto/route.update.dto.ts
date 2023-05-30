import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class RouteUpdateDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }): string => value?.trim())
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }): string => value?.trim())
  @MaxLength(10)
  status: string;

  @IsOptional()
  @IsNumber()
  length: number;
}
