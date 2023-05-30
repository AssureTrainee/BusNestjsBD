import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StagePointDto } from 'src/dto/stage.point.dto';
import { StagePointUpdateDto } from 'src/dto/stage.point.update.dto';
import { StagePointService } from 'src/service/stage-point/stage-point.service';

@Controller('stage-point')
export class StagePointController {
  constructor(private stagePointService: StagePointService) {}

  @Get()
  async findAll() {
    return await this.stagePointService.findAllStagePoints();
  }

  @Post()
  async create(@Body() stagePoint: StagePointDto) {
    return await this.stagePointService.createActivity(stagePoint);
  }

  @Get(':id')
  async findById(@Param('id') stagePointId: string) {
    return await this.stagePointService.findStagePointById(stagePointId);
  }

  @Patch(':id')
  async update(
    @Param('id') stagePointd: string,
    @Body() stagePointUpdate: StagePointUpdateDto,
  ) {
    return await this.stagePointService.updateActivity(
      stagePointd,
      stagePointUpdate,
    );
  }

  @Delete(':id')
  async delete(@Param('id') stagePointd: string) {
    return await this.stagePointService.deleteActivityById(stagePointd);
  }
}
