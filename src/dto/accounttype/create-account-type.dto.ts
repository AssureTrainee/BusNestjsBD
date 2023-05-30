import { IsDecimal, isDecimal, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";
import { Double } from "typeorm";

export class CreateAccountTypeDto {
    @IsString()
    @MinLength(1)
    type: string;
    
    @IsNumber()
    @IsPositive()
    fee: number;
}
