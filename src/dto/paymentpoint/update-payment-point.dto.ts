import { PartialType } from '@nestjs/swagger';
import { IsIn, IsString, IsUUID } from 'class-validator';

export class UpdatePaymentPointDto  {
    @IsString()
    @IsIn(['ACTIVE', 'INACTIVE'])
    status: string;
}
