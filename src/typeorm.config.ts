import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  name: 'postgres',
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'busdb2023',
  database: 'postgres',
  synchronize: true,
  autoLoadEntities: true,
};

export default config;
