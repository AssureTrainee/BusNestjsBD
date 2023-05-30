import { Module } from '@nestjs/common';
import { RouteController } from './route/route.controller';
import { ServiceModule } from 'src/service/service.module';
import { PassengerController } from './passenger/passenger.controller';
import { PersonController } from './person/person.controller';
import { ActivityController } from './activity/activity.controller';
import { ItineraryController } from './itinerary/itinerary.controller';
import { StagePointController } from './stage-point/stage-point.controller';
import { CardTrackController } from './card-track/card-track.controller';
import { DetailStagePointController } from './detail-stage-point/detail-stage-point.controller';
import { LogStagePointController } from './log-stage-point/log-stage-point.controller';

@Module({
  imports: [ServiceModule],
  controllers: [
    RouteController,
    PassengerController,
    PersonController,
    ActivityController,
    ItineraryController,
    StagePointController,
    CardTrackController,
    DetailStagePointController,
    LogStagePointController,
  ],
})
export class ControllerModule {}
