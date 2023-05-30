import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LogStagePointDto } from 'src/dto/log.stage.point.dto';
import { LogStagePointUpdateDto } from 'src/dto/log.stage.point.update.dto';
import { LogStagePointService } from 'src/service/log-stage-point/log-stage-point.service';

@Controller('log-stage-point')
export class LogStagePointController {
  constructor(private logStagePointService: LogStagePointService) {}

  @Get()
  async findAll() {
    return await this.logStagePointService.findAllLogStagePoints();
  }

  @Post()
  async create(@Body() logStagePoint: LogStagePointDto) {
    return await this.logStagePointService.createLogStagePoint(logStagePoint);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.logStagePointService.findLogStagePointById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() logStagePointUpdateDto: LogStagePointUpdateDto,
  ) {
    return await this.logStagePointService.updateLogStagePoint(
      id,
      logStagePointUpdateDto,
    );
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.logStagePointService.deleteLogStagePoint(id);
  }
}
