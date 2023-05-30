import { IsString, IsNotEmpty, IsIn } from 'class-validator';
export class UpdateDriverDto {
  @IsString({ message: 'status must be a string.' })
  @IsNotEmpty({ message: 'Por favor proporcione el status.' })
  @IsIn(['ACTIVE', 'INACTIVE'])
  status: string;
}
