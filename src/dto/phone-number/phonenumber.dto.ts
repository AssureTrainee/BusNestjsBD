import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PhoneNumberDto {
  @IsUUID('all', { message: 'Person Id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a person id.' })
  personId: string;

  @IsString({ message: 'phone must be a string.' })
  phoneNumber: string;

  primary: number;

  @IsString({ message: 'type must be a string.' })
  type: string;
}
