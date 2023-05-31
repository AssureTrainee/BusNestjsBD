import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { PassengerService } from '../../service/passenger/passenger.service';
import { PassengerEntity } from '../../persistance/passenger.entity';
import { PassengerDto } from '../../dto/passenger.dto';
import { UpdatePassengerDto } from '../../dto/update-passenger.dto';
import { PhonenumberService } from 'src/service/phonenumber/phonenumber.service';
import { PhoneNumberDto } from 'src/dto/phone-number/phonenumber.dto';
import { UpdatePhoneNumberDto } from 'src/dto/phone-number/update-phonenumber.dto';

@Controller('phonenumber')
export class PhoneNumberController {
  constructor(private phoneNumberService: PhonenumberService) {}

  @Get()
  findAll() {
    return this.phoneNumberService.findAllPhoneNumber();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.phoneNumberService.findPhoneNumberById(id);
  }

  @Post()
  create(@Body() passengerDto: PhoneNumberDto) {
    return this.phoneNumberService.createPhoneNumber(passengerDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdatePassengerDto: UpdatePhoneNumberDto,
  ) {
    return this.phoneNumberService.updatePhoneNumber(id, UpdatePassengerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.phoneNumberService.deletePhoneNumberById(id);
  }
}
