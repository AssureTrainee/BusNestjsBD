import { Transform } from 'class-transformer';
import { IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';

export class RouteUpdateDto {
  @IsOptional()
  @IsString({ message: 'Name must be a string.' })
  @Transform(({ value }): string => value?.trim())
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString({ message: 'Status must be a string.' })
  @Transform(({ value }): string => value?.trim())
  @MaxLength(10)
  status: string;

  @IsOptional()
  @IsNumber()
  length: number;
}
