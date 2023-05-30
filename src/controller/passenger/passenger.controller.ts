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

@Controller('passengers')
export class PassengerController {
  constructor(private passengerService: PassengerService) {}

  @Get()
  findAll() {
    return this.passengerService.findAllPassengers();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.passengerService.findPassengerById(id);
  }

  @Post()
  create(@Body() passengerDto: PassengerDto) {
    return this.passengerService.createPassenger(passengerDto);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() UpdatePassengerDto: UpdatePassengerDto,
  ) {
    return this.passengerService.updatePassenger(id, UpdatePassengerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.passengerService.deletePassengerById(id);
  }
}
