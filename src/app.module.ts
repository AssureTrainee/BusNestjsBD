import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceModule } from './service/service.module';
import { PersonController } from './controller/person/person.controller';
import { PassengerController } from './controller/passenger/passenger.controller';
import config from './typeorm.config';
import { ConfigModule } from '@nestjs/config';
import { StationsModule } from './stations/stations.module';
import { PersonService } from './service/person/person.service';

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
    ServiceModule,
    StationsModule,
  ],
  controllers: [AppController, PersonController, PassengerController],
  providers: [AppService],
})
export class AppModule {}
