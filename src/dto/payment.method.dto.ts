import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";


export class PaymentMethodDto {
    @IsString({ message: 'Method name must be a string' })
    @IsNotEmpty({ message: 'Please give a method name' })
    @ApiProperty({ type: String, description: 'methodName' })
    methodName: string;

    @IsString({ message: 'Description must be a string' })
    @IsNotEmpty({ message: 'Please give a valid description' })
    @ApiProperty({ type: String, description: 'description' })
    description: string;
}