import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItineraryEntity } from 'src/persistance/itineraty.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ItineraryService {
  constructor(
    @InjectRepository(ItineraryEntity)
    private itineraryRepository: Repository<ItineraryEntity>,
  ) {}

  async findAllItineraries() {
    return this.itineraryRepository.find();
  }

  async findItineraryById(itineraryId: string) {
    const activity = this.itineraryRepository.findOne({
      where: { itineraryId },
    });
    if (!activity) {
      throw new NotFoundException(
        `Activity with this id: ${itineraryId} not found`,
      );
    }
    return activity;
  }

  //   async createActivity(activityData: ActivityDto) {
  //     const activityInfo: ActivityUpdateDto = { ...activityData };
  //     const route = await this.routeService.findRouteById(activityData.routeId);
  //     const itinerary = await this.itineraryService.findItineraryById(
  //       activityData.itineraryId,
  //     );
  //     if (!route && !itinerary) {
  //       throw new NotFoundException();
  //     }

  //     const activity = this.activityRepository.create(activityInfo);
  //     activity.Route = route;
  //     activity.Itinerary = itinerary;

  //     return this.activityRepository.save(activity);
  //   }

  //   async updateActivity(activityId: string, activityData: ActivityUpdateDto) {
  //     const activity: ActivityEntity = await this.findActivityById(activityId);
  //     await this.activityRepository.merge(activity, activityData);
  //     return await this.activityRepository.save(activity);
  //   }

  async deleteActivityById(itineraryId: string) {
    const itinerary = await this.findItineraryById(itineraryId);
    await this.itineraryRepository.remove(itinerary);
    return true;
  }
}
