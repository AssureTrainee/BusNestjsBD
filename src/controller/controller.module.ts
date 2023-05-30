import { Module } from '@nestjs/common';
import { RouteController } from './route/route.controller';
import { ServiceModule } from '../service/service.module';
import { PassengerController } from './passenger/passenger.controller';
import { PersonController } from './person/person.controller';

import { ActivityController } from './activity/activity.controller';
import { ItineraryController } from './itinerary/itinerary.controller';
import { StagePointController } from './stage-point/stage-point.controller';
import { CardTrackController } from './card-track/card-track.controller';
import { DetailStagePointController } from './detail-stage-point/detail-stage-point.controller';
import { LogStagePointController } from './log-stage-point/log-stage-point.controller';
import { BusController } from './bus/bus.controller';

import { StationsController } from './station/stations.controller';
import { PaymentMethodController } from './payment-method/payment-method.controller';
import { AccountTypeController } from './accounttype/account-type.controller';
import { OwnerController } from './owner/owner.controller';
import { ManagerController } from './manager/manager.controller';
import { DriverController } from './driver/driver.controller';

import { PaymentPointController } from './paymentpoint/payment.point.controller';
@Module({
  imports: [ServiceModule],
  controllers: [
    RouteController,
    PassengerController,
    PersonController,
    StationsController,
    PaymentMethodController,
    AccountTypeController,
    OwnerController,
    ManagerController,
    DriverController,
    ActivityController,
    ItineraryController,
    StagePointController,
    CardTrackController,
    DetailStagePointController,
    LogStagePointController,
    BusController,
    StationsController,
    PaymentMethodController,
    AccountTypeController,
    PaymentPointController,
  ],
})
export class ControllerModule {}
