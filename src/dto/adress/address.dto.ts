import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @IsUUID('all', { message: 'Person Id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a person id.' })
  personId: string;

  @IsString({ message: 'phone must be a string.' })
  street: string;

  @IsString({ message: 'type must be a string.' })
  city: string;

  @IsString({ message: 'type must be a string.' })
  postalCode: string;
}
