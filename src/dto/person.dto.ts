import { IsString, IsDate, IsNumber, IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PersonDto {
  @IsString({ message: 'First name must be a string.' })
  @IsNotEmpty({ message: 'Por favor proporcione el nombre.' })
  @ApiProperty({ type: String, description: 'firstName' })
  firstName: string;

  @IsString({ message: 'Last name must be a string.' })
  @IsNotEmpty({ message: 'Por favor proporcione el apellido.' })
  @ApiProperty({ type: String, description: 'lastName' })
  lastName: string;

  @IsString({ message: 'birth date must be a date.' })
  @IsNotEmpty({ message: 'Please provide a birth date.' })
  @ApiProperty({ type: Date, description: 'birthDate' })
  birthDate: Date;

  @IsString({ message: 'Dni must be a string.' })
  @IsNotEmpty({ message: 'Por favor proporcione el dni.' })
  @ApiProperty({ type: String, description: 'dni' })
  dni: string;

  @Min(0, { message: 'Code must be integer' })
  @ApiProperty({ type: Number, description: 'code' })
  @IsNumber()
  code: number;
}
