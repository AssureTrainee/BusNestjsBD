import { Module } from '@nestjs/common';
import { RouteController } from './route/route.controller';
import { ServiceModule } from 'src/service/service.module';
import { PassengerController } from './passenger/passenger.controller';
import { PersonController } from './person/person.controller';

@Module({
  imports: [ServiceModule],
  controllers: [RouteController, PassengerController, PersonController],
})
export class ControllerModule {}
