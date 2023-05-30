import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { OwnerService } from 'src/service/owner/owner.service';
import { OwnerDto } from 'src/dto/owner/owner.dto';
import { UpdateOwnerDto } from 'src/dto/owner/update-owner.dto';

@Controller('passengers')
export class OwnerController {
  constructor(private ownerController: OwnerService) {}

  @Get()
  findAll() {
    return this.ownerController.findAllOwner();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.ownerController.findOwnerById(id);
  }

  @Post()
  create(@Body() ownerDto: OwnerDto) {
    return this.ownerController.createOwner(ownerDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() UpdatePassengerDto: UpdateOwnerDto) {
    return this.ownerController.updateOwner(id, UpdatePassengerDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.ownerController.deleteOwnerById(id);
  }
}
