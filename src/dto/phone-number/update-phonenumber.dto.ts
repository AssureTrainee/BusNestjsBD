import { IsString, IsNotEmpty, IsIn } from 'class-validator';
export class UpdatePhoneNumberDto {
  @IsString({ message: 'phone must be a string.' })
  phoneNumber: string;

  primary: number;

  @IsString({ message: 'type must be a string.' })
  type: string;
}
