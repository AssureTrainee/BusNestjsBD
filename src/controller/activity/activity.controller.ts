import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ActivityDto } from 'src/dto/activity.dto';
import { ActivityUpdateDto } from 'src/dto/activity.update.dto';
import { ActivityService } from 'src/service/activity/activity.service';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Get()
  async findAll() {
    return await this.activityService.findAllActivities();
  }

  @Post()
  async create(@Body() activity: ActivityDto) {
    return await this.activityService.createActivity(activity);
  }

  @Get(':id')
  async findById(@Param('id') activityId: string) {
    return await this.activityService.findActivityById(activityId);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() activityUpdate: ActivityUpdateDto,
  ) {
    return await this.activityService.updateActivity(id, activityUpdate);
  }

  @Delete(':id')
  async delete(@Param('id') activityId: string) {
    return await this.activityService.deleteActivityById(activityId);
  }
}
