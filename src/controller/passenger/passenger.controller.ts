import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PassengerService } from '../../service/passenger/passenger.service';
import { PassengerEntity } from '../../persistance/passenger.entity';
import { PassengerDto } from '../../dto/passenger.dto';

@Controller('passengers')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  // @Get()
  // async findAll() {
  //   const passengers = await this.passengerService.findAllPassengers();
  //   return passengers.map((passenger) => this.mapPassengerToDto(passenger));
  // }

  // @Get(':id')
  // async findById(@Param('id') id: string) {
  //   const passenger = await this.passengerService.findPassengerById(id);
  //   if (passenger) {
  //     return this.mapPassengerToDto(passenger);
  //   }
  //   return null;
  // }

  @Post()
  async create(@Body() passengerDto: PassengerDto) {
    return this.passengerService.createPassenger(passengerDto);
  }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() passengerDto: PassengerDto) {
  //   const passenger = await this.passengerService.updatePassenger(
  //     id,
  //     passengerDto,
  //   );
  //   if (passenger) {
  //     return this.mapPassengerToDto(passenger);
  //   }
  //   return null;
  // }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.passengerService.deletePassengerById(id);
  }
}
