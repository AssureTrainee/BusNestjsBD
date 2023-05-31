import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAddressDto {
  @IsString({ message: 'phone must be a string.' })
  street: string;

  @IsString({ message: 'type must be a string.' })
  city: string;

  @IsString({ message: 'type must be a string.' })
  postalCode: string;
}
