import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ItineraryService } from 'src/service/itinerary/itinerary.service';

@Controller('itinerary')
export class ItineraryController {
  constructor(private itineraryService: ItineraryService) {}

  @Get()
  async findAll() {
    return await this.itineraryService.findAllItineraries();
  }

  //   @Post()
  //   async create(@Body() itinerary: ItineraryDto) {
  //     return await this.itineraryService.createItinerary(route);
  //   }

  @Get(':id')
  async findById(@Param('id') itinerary: string) {
    return await this.itineraryService.findItineraryById(itinerary);
  }

  //   @Patch(':id')
  //   async update(@Param('id') id: string, @Body() routeUpdate: RouteUpdateDto) {
  //     return await this.itineraryService.(id, routeUpdate);
  //   }

  @Delete(':id')
  async delete(@Param('id') itineraryId: string) {
    return await this.itineraryService.deleteActivityById(itineraryId);
  }
}
