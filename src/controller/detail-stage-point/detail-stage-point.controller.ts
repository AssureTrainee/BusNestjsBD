import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { DetailStagePointService } from '../../service/detail-stage-point/detail-stage-point.service';
import { DetailStagePointDto } from 'src/dto/detail.stage.point.dto';

@Controller('detail-stage-point')
export class DetailStagePointController {
  constructor(private detailStagePointService: DetailStagePointService) {}

  @Get()
  async findAll() {
    return await this.detailStagePointService.findAllDetailStagePoints();
  }

  @Post()
  async create(@Body() cardTrack: DetailStagePointDto) {
    return await this.detailStagePointService.createDetailStagePoint(cardTrack);
  }

  @Get(':id')
  async findById(@Param('id') cardTrackId: string) {
    return await this.detailStagePointService.findDetailStagePointById(
      cardTrackId,
    );
  }

  @Patch(':id')
  async update(
    @Param('id') icardTrackId: string,
    @Body() cardTrackUpdate: DetailStagePointDto,
  ) {
    return await this.detailStagePointService.updateDetailStagePoint(
      icardTrackId,
      cardTrackUpdate,
    );
  }

  @Delete(':id')
  async delete(@Param('id') icardTrackId: string) {
    return await this.detailStagePointService.deleteDetailStagePoint(
      icardTrackId,
    );
  }
}
