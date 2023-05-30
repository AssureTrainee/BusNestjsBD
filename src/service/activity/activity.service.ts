import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityDto } from 'src/dto/activity.dto';
import { ActivityEntity } from 'src/persistance/activity.entity';
import { Repository } from 'typeorm';
import { RouteService } from '../route/route.service';
import { RouteEntity } from 'src/persistance/route.entity';
import { ActivityUpdateDto } from 'src/dto/activity.update.dto';
import { ItineraryService } from '../itinerary/itinerary.service';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,
    @Inject(forwardRef(() => RouteService))
    private routeService: RouteService,
    @Inject(forwardRef(() => ItineraryService))
    private itineraryService: ItineraryService,
  ) {}

  async findAllActivities() {
    return this.activityRepository.find();
  }

  async findActivityById(activityId: string) {
    const activity = this.activityRepository.findOne({
      where: { activityId },
    });
    if (!activity) {
      throw new NotFoundException(
        `Activity with this id: ${activityId} not found`,
      );
    }
    return activity;
  }

  async createActivity(activityData: ActivityDto) {
    const activityInfo: ActivityUpdateDto = { ...activityData };
    const route = await this.routeService.findRouteById(activityData.routeId);
    const itinerary = await this.itineraryService.findItineraryById(
      activityData.itineraryId,
    );
    if (!route && !itinerary) {
      throw new NotFoundException();
    }

    const activity = this.activityRepository.create(activityInfo);
    activity.Route = route;
    activity.Itinerary = itinerary;
    try {
      return this.activityRepository.save(activity);
    } catch (error) {
      throw new ConflictException(
        'There was a conflict when create the activity',
      );
    }
  }

  async updateActivity(activityId: string, activityData: ActivityUpdateDto) {
    const activity: ActivityEntity = await this.findActivityById(activityId);
    await this.activityRepository.merge(activity, activityData);
    return await this.activityRepository.save(activity);
  }

  async deleteActivityById(activityId: string) {
    const activity = await this.findActivityById(activityId);
    await this.activityRepository.remove(activity);
    return true;
  }
}
