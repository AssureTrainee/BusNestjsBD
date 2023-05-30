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
import { DriverService } from 'src/service/driver/driver.service';
import { DriverDro } from 'src/dto/driver/driver.dto';
import { UpdateDriverDto } from 'src/dto/driver/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private driverService: DriverService) {}

  @Get()
  findAll() {
    return this.driverService.findAllDriver();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.driverService.findDriverById(id);
  }

  @Post()
  create(@Body() driverDto: DriverDro) {
    return this.driverService.createDriver(driverDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateDriverDto: UpdateDriverDto) {
    return this.driverService.updateDriver(id, UpdateDriverDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.driverService.deleteDriverById(id);
  }
}
