import { Module } from '@nestjs/common';
import { RouteController } from './route/route.controller';
import { ServiceModule } from 'src/service/service.module';
import { PassengerController } from './passenger/passenger.controller';
import { PersonController } from './person/person.controller';
import { StationsController } from './station/stations.controller';
import { PaymentMethodController } from './payment-method/payment-method.controller';
import { AccountTypeController } from './accounttype/account-type.controller';
import { PaymentPointController } from './paymentpoint/payment.point.controller';
import { PassengeraccountController } from './passengeraccount/passenger.account.controller';

@Module({
  imports: [ServiceModule],
  controllers: [
    RouteController,
    PassengerController,
    PersonController,
    StationsController,
    AccountTypeController,
    PaymentMethodController,
    PaymentPointController,
    PassengeraccountController
  ],
})
export class ControllerModule {}
