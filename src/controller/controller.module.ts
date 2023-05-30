import { Module } from '@nestjs/common';
import { RouteController } from './route/route.controller';
import { ServiceModule } from 'src/service/service.module';
import { PassengerController } from './passenger/passenger.controller';
import { PersonController } from './person/person.controller';
import { ActivityController } from './activity/activity.controller';
import { ItineraryController } from './itinerary/itinerary.controller';

@Module({
  imports: [ServiceModule],
  controllers: [
    RouteController,
    PassengerController,
    PersonController,
    ActivityController,
    ItineraryController,
  ],
})
export class ControllerModule {}
