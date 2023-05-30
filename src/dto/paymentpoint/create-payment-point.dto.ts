import { IsString } from "@nestjs/class-validator";
import { IsIn, IsNotEmpty, IsUUID } from "class-validator";

export class CreatePaymentPointDto {
    @IsUUID('all', { message: 'Payment point Id must be of type id.' })
    @IsNotEmpty({ message: 'Please provide a station id.' })
    stationId: string;
    
    @IsString()
    @IsIn(['ACTIVE', 'INACTIVE'])
    status: string;
}
