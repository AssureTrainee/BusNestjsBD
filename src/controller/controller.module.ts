import { Module } from '@nestjs/common';
import { RouteController } from './route/route.controller';
import { ServiceModule } from '../service/service.module';
import { PassengerController } from './passenger/passenger.controller';
import { PersonController } from './person/person.controller';
import { StationsController } from './station/stations.controller';
import { PaymentMethodController } from './payment-method/payment-method.controller';
import { AccountTypeController } from './accounttype/account-type.controller';
import { OwnerController } from './owner/owner.controller';

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
  ],
})
export class ControllerModule {}
