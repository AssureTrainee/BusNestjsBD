import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceModule } from './service/service.module';
import { ControllerModule } from './controller/controller.module';

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
    ControllerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
