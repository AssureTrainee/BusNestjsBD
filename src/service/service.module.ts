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
      StationEntity
    ]),
  ],
  providers: [PersonService, PassengerService, RouteService, StationsService],
  exports: [PersonService, PassengerService, RouteService, StationsService],
})
export class ServiceModule {}
