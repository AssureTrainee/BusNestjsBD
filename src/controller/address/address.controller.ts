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
import { AddressService } from 'src/service/address/address.service';
import { AddressDto } from 'src/dto/adress/address.dto';
import { UpdateAddressDto } from 'src/dto/adress/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get()
  findAll() {
    return this.addressService.findAllAddress();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.addressService.findAddressById(id);
  }

  @Post()
  create(@Body() addressDto: AddressDto) {
    return this.addressService.createAddress(addressDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    return this.addressService.updateAddress(id, updateAddressDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.addressService.deleteAddressById(id);
  }
}
