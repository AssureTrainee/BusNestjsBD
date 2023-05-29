import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateStationDto {
    @IsString()
    @MinLength(1)
    name: string;
    
    @IsString()
    @MinLength(1)
    address: string;
    
    @IsString()
    @IsOptional()
    code?: string;
}
