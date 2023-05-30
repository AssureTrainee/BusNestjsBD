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
import { StationsService } from './station/stations.service';
import { PaymentMethodService } from './payment-method/payment-method.service';
import { PaymentMethodsEntity } from 'src/persistance/payment.method.entity';
import { AccountTypeEntity } from 'src/persistance/account.type.entity';
import { AccountTypeService } from './accounttype/account-type.service';
<<<<<<< HEAD
import { AccountTypeEntity } from 'src/persistance/account.type.entity';
import { PaymentPointService } from './paymentpoint/payment-point.service';
import { PaymentPointEntity } from '../persistance/payment.point.entity';



=======
>>>>>>> 7e22592d83e605f9b088262def59ff75d88062f8

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
      StationEntity,
<<<<<<< HEAD
      AccountTypeEntity,
      PaymentPointEntity
    ]),
  ],
  providers: [PersonService, PassengerService, RouteService, StationsService, AccountTypeService, PaymentPointService],
  exports: [PersonService, PassengerService, RouteService, StationsService, AccountTypeService, PaymentPointService],
=======
      PaymentMethodsEntity,
      AccountTypeEntity
    ]),
  ],
  providers: [PersonService, PassengerService, RouteService, StationsService, PaymentMethodService, AccountTypeService],
  exports: [PersonService, PassengerService, RouteService, StationsService, PaymentMethodService, AccountTypeService],
>>>>>>> 7e22592d83e605f9b088262def59ff75d88062f8
})
export class ServiceModule {}
