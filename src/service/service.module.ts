import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from 'src/persistance/address.entity';
import { DriverEntity } from 'src/persistance/driver.entity';
import { ManagerEntity } from 'src/persistance/manager.entity';
import { OwnerEntity } from 'src/persistance/owner.entity';
import { PassengerEntity } from 'src/persistance/passenger.entity';
import { PersonEntity } from 'src/persistance/person.entity';
import { PhoneNumberEntity } from 'src/persistance/phone-number.entity';
import { RouteService } from './route/route.service';
import { RouteEntity } from 'src/persistance/route.entity';
import { PersonService } from './person/person.service';
import { PassengerService } from './passenger/passenger.service';
import { ActivityService } from './activity/activity.service';
import { ItineraryService } from './itinerary/itinerary.service';
import { StagePointService } from './stage-point/stage-point.service';
import { CardTrackService } from './card-track/card-track.service';
import { ActivityEntity } from 'src/persistance/activity.entity';
import { ItineraryEntity } from 'src/persistance/itineraty.entity';
import { StagePointEntity } from 'src/persistance/stage.point.entity';
import { CardTrackEntity } from 'src/persistance/card.track.entity';
import { DetailStagePointService } from './detail-stage-point/detail-stage-point.service';
import { DetailStagePointEntity } from 'src/persistance/detail.stage.point.entity';
import { LogStagePointService } from './log-stage-point/log-stage-point.service';
import { LogStagePointEntity } from 'src/persistance/log.stage.point.entity';
import { BusService } from './bus/bus.service';
import { BusEntity } from 'src/persistance/Bus.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PersonEntity,
      AddressEntity,
      PhoneNumberEntity,
      DriverEntity,
      ManagerEntity,
      OwnerEntity,
      PassengerEntity,
      RouteEntity,
      ActivityEntity,
      ItineraryEntity,
      StagePointEntity,
      CardTrackEntity,
      DetailStagePointEntity,
      LogStagePointEntity,
      BusEntity,
    ]),
  ],
  providers: [
    PersonService,
    PassengerService,
    RouteService,
    ActivityService,
    ItineraryService,
    StagePointService,
    CardTrackService,
    ActivityService,
    DetailStagePointService,
    LogStagePointService,
    BusService,
  ],
  exports: [
    PersonService,
    PassengerService,
    RouteService,
    ActivityService,
    ItineraryService,
    StagePointService,
    CardTrackService,
    ActivityService,
    DetailStagePointService,
    LogStagePointService,
    BusService,
  ],
})
export class ServiceModule {}
