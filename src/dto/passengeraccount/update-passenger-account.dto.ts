import { PartialType } from '@nestjs/swagger';
import { CreatePassengeraccountDto } from './create-passenger-account.dto';

export class UpdatePassengeraccountDto extends PartialType(CreatePassengeraccountDto) {}
