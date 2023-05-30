import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CardTrackDto } from 'src/dto/card.track.dto';
import { CardTrackUpdateDto } from 'src/dto/card.track.update.dto';
import { CardTrackService } from 'src/service/card-track/card-track.service';

@Controller('card-track')
export class CardTrackController {
  constructor(private cardTrackService: CardTrackService) {}

  @Get()
  async findAll() {
    return await this.cardTrackService.findAllCardsTracks();
  }

  @Post()
  async create(@Body() cardTrack: CardTrackDto) {
    return await this.cardTrackService.createCardTrack(cardTrack);
  }

  @Get(':id')
  async findById(@Param('id') cardTrackId: string) {
    return await this.cardTrackService.findCardTrackById(cardTrackId);
  }

  @Patch(':id')
  async update(
    @Param('id') icardTrackId: string,
    @Body() cardTrackUpdate: CardTrackUpdateDto,
  ) {
    return await this.cardTrackService.updateCardTrack(
      icardTrackId,
      cardTrackUpdate,
    );
  }

  @Delete(':id')
  async delete(@Param('id') icardTrackId: string) {
    return await this.cardTrackService.deleteCardTrackById(icardTrackId);
  }
}
