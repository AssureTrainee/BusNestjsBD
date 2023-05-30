import { IsString, IsNotEmpty, IsUUID, IsIn } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdatePassengerDto {
  @IsString({ message: 'status must be a string.' })
  @IsNotEmpty({ message: 'Por favor proporcione el status.' })
  @IsIn(['ACTIVE', 'INACTIVE'])
  status: string;
}
