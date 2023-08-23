import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConnectionConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'desarrolloweb.net.ar',
  port: 3306,
  username: 'desarrolloweb_andres',
  password: 'Desarrolloweb*4ndr3s',
  database: 'desarrolloweb_pp',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  timezone: 'utc',
};
