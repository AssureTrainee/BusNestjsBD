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
import { ManagerService } from 'src/service/manager/manager.service';
import { ManagerDto } from 'src/dto/mannager/manager.dto';
import { UpdateManagerDto } from 'src/dto/mannager/update-manager.dto';

@Controller('manager')
export class ManagerController {
  constructor(private managerService: ManagerService) {}

  @Get()
  findAll() {
    return this.managerService.findAllManager();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.managerService.findManagerById(id);
  }

  @Post()
  create(@Body() passengerDto: ManagerDto) {
    return this.managerService.createManager(passengerDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdateManagerDto: UpdateManagerDto) {
    return this.managerService.updateManager(id, UpdateManagerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.managerService.deleteManagerById(id);
  }
}
