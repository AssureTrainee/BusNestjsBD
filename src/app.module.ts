import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceModule } from './service/service.module';
import { PersonController } from './controller/person/person.controller';
import { PassengerController } from './controller/passenger/passenger.controller';
import { StationsController } from './controller/station/stations.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true,
    }),
    ServiceModule
  ],
  controllers: [AppController, PersonController, PassengerController, StationsController],
  providers: [AppService],
})
export class AppModule {}
