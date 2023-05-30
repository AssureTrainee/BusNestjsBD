import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ItineraryDto } from 'src/dto/itinerary.dto';
import { ItineraryService } from 'src/service/itinerary/itinerary.service';

@Controller('itinerary')
export class ItineraryController {
  constructor(private itineraryService: ItineraryService) {}

  @Get()
  async findAll() {
    return await this.itineraryService.findAllItineraries();
  }

  @Post()
  async create(@Body() itinerary: ItineraryDto) {
    return await this.itineraryService.createItinerany(itinerary);
  }

  @Get(':id')
  async findById(@Param('id') itinerary: string) {
    return await this.itineraryService.findItineraryById(itinerary);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() itineraryDto: ItineraryDto) {
    return await this.itineraryService.updateItinerary(id, itineraryDto);
  }

  @Delete(':id')
  async delete(@Param('id') itineraryId: string) {
    return await this.itineraryService.deleteItineraryById(itineraryId);
  }
}
