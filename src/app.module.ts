import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceModule } from './service/service.module';
import { ControllerModule } from './controller/controller.module';
import config from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'postgres',
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
    ControllerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
