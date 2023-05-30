import { IsNotEmpty, IsUUID } from 'class-validator';

export class OwnerDto {
  @IsUUID('all', { message: 'Person Id must be of type id.' })
  @IsNotEmpty({ message: 'Please provide a person id.' })
  personId: string;
}
