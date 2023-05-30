import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BusDto } from '../../dto/Bus.dto';
import { BusUpdateDto } from '../../dto/Bus.update.dto';
import { BusService } from '../../service/bus/bus.service';

@Controller('bus')
export class BusController {
  constructor(private busService: BusService) {}

  @Get()
  async findAll() {
    return await this.busService.findAllBuses();
  }

  @Post()
  async create(@Body() busdata: BusDto) {
    return await this.busService.createBus(busdata);
  }

  @Get(':id')
  async findById(@Param('id') busId: string) {
    return await this.busService.findBusById(busId);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() busUpdateDto: BusUpdateDto) {
    return await this.busService.updateBus(id, busUpdateDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.busService.deleteBus(id);
  }
}
