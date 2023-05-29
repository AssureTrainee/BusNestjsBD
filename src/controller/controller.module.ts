import { Module } from '@nestjs/common';
import { RouteController } from './route/route.controller';
import { ServiceModule } from 'src/service/service.module';

@Module({
  imports: [ServiceModule],
  controllers: [RouteController],
})
export class ControllerModule {}
