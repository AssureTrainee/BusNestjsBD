import { Module } from '@nestjs/common';
import { RouteController } from './route/route.controller';
import { ServiceModule } from 'src/service/service.module';
import { PassengerController } from './passenger/passenger.controller';
import { PersonController } from './person/person.controller';
import { StationsController } from './station/stations.controller';
import { PaymentMethodController } from './payment-method/payment-method.controller';
import { AccountTypeController } from './accounttype/account-type.controller';
import { PaymentPointController } from './paymentpoint/payment.point.controller';


@Module({
  imports: [ServiceModule],
<<<<<<< HEAD
  controllers: [RouteController, PassengerController, PersonController, StationsController, AccountTypeController, PaymentPointController],
=======
  controllers: [RouteController, PassengerController, PersonController, StationsController, PaymentMethodController, AccountTypeController],
>>>>>>> 7e22592d83e605f9b088262def59ff75d88062f8
})
export class ControllerModule {}
