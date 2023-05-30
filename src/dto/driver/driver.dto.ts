import { IsString, IsNotEmpty, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DriverDro {
  @IsUUID('all', { message: 'Person Id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a person id.' })
  personId: string;
}
