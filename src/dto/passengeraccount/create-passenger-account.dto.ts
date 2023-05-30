import { IsIn, IsString } from "@nestjs/class-validator";
import { IsNotEmpty, IsUUID, IsPositive, IsNumber } from 'class-validator';

export class CreatePassengeraccountDto {
    @IsUUID('all', { message: 'Passenger Id must be of type id.' })
    @IsNotEmpty({ message: 'Please provide a passenger id.' })
    passengerId: string;

    @IsUUID('all', { message: 'Account type Id must be of type id.' })
    @IsNotEmpty({ message: 'Please provide a account type id.' })
    accountTypeId: string;
    
    @IsString()
    @IsIn(['ENABLED', 'DISABLED'])
    status: string;

    @IsNumber()
    balance: number;
}
