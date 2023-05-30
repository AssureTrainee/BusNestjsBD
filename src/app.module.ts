import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceModule } from './service/service.module';
import { PersonController } from './controller/person/person.controller';
import { PassengerController } from './controller/passenger/passenger.controller';
import config from './typeorm.config';
import { PersonService } from './service/person/person.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'busdb2023',
      database: 'postgres',
      synchronize: true,
      autoLoadEntities: true,
    }),
    ServiceModule,
  ],
  controllers: [AppController, PersonController, PassengerController],
  providers: [AppService],
})
export class AppModule {}
