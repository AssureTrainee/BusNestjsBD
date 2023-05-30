import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from 'src/persistance/address.entity';
import { DriverEntity } from 'src/persistance/driver.entity';
import { ManagerEntity } from 'src/persistance/manager.entity';
import { OwnerEntity } from 'src/persistance/owner.entity';
import { PassengerEntity } from 'src/persistance/passenger.entity';
import { PersonEntity } from 'src/persistance/person.entity';
import { PhoneNumberEntity } from 'src/persistance/phone-number.entity';
import { StationEntity } from 'src/persistance/station.entity';
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
import { StationsService } from './station/stations.service';
import { PaymentMethodService } from './payment-method/payment-method.service';
import { PaymentMethodsEntity } from 'src/persistance/payment.method.entity';
import { AccountTypeEntity } from 'src/persistance/account.type.entity';
import { AccountTypeService } from './accounttype/account-type.service';
import { OwnerService } from './owner/owner.service';
import { ManagerService } from './manager/manager.service';
import { DriverService } from './driver/driver.service';
import { PaymentPointService } from './paymentpoint/payment-point.service';
import { PaymentPointEntity } from '../persistance/payment.point.entity';

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
      StationEntity,
      PaymentMethodsEntity,
      AccountTypeEntity,
      PaymentPointEntity,
    ]),
  ],
  providers: [
    PersonService,
    PassengerService,
    RouteService,
    StationsService,
    PaymentMethodService,
    AccountTypeService,
    OwnerService,
    ManagerService,
    DriverService,
    ActivityService,
    ItineraryService,
    StagePointService,
    CardTrackService,
    ActivityService,
    DetailStagePointService,
    LogStagePointService,
    BusService,
    StationsService,
    PaymentMethodService,
    AccountTypeService,
    PaymentPointService,
  ],
  exports: [
    PersonService,
    PassengerService,
    RouteService,
    StationsService,
    PaymentMethodService,
    AccountTypeService,
    OwnerService,
    ManagerService,
    DriverService,
    ActivityService,
    ItineraryService,
    StagePointService,
    CardTrackService,
    ActivityService,
    DetailStagePointService,
    LogStagePointService,
    BusService,
    StationsService,
    PaymentMethodService,
    AccountTypeService,
    PaymentPointService,
  ],
})
export class ServiceModule {}
