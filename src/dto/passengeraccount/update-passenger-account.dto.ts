import { IsIn, IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdatePassengeraccountDto  {
    
    @IsOptional()
    @IsString()
    @IsIn(['ENABLED', 'DISABLED'])
    status: string;

    @IsOptional()
    @IsNumber()
    balance: number;
}
