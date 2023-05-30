import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PassengeraccountService } from '../../service/passengeraccount/passenger.account.service';
import { CreatePassengeraccountDto } from '../../dto/passengeraccount/create-passenger-account.dto';
import { UpdatePassengeraccountDto } from '../../dto/passengeraccount/update-passenger-account.dto';

@Controller('passengeraccount')
export class PassengeraccountController {
  constructor(private readonly passengeraccountService: PassengeraccountService) {}

  @Post()
  create(@Body() createPassengeraccountDto: CreatePassengeraccountDto) {
    return this.passengeraccountService.create(createPassengeraccountDto);
  }

  @Get()
  findAll() {
    return this.passengeraccountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengeraccountService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePassengeraccountDto: UpdatePassengeraccountDto) {
    return this.passengeraccountService.update(id, updatePassengeraccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.passengeraccountService.remove(id);
  }
}
