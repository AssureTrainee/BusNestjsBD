import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString, MaxLength, IsNumber } from 'class-validator';

export class RouteDto {
  @IsString({ message: 'Name must be a string.' })
  @IsNotEmpty({ message: 'Please provide a name.' })
  @Transform(({ value }): string => value?.trim())
  @MaxLength(50)
  name: string;

  @IsString({ message: 'Status must be a string.' })
  @IsNotEmpty({ message: 'Please provide a status.' })
  @Transform(({ value }): string => value?.trim())
  @MaxLength(10)
  status: string;

  @IsNotEmpty({ message: 'Please provide length.' })
  @IsNumber()
  length: number;
}
