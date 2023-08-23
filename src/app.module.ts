import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// const envModule = ConfigModule.forRoot({
//   isGlobal: true,
// });
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from '/config/typeorm.config';
import { ProductsModule } from './products/products.module';
import { TablesModule } from './tables/tables.module';

@Module({
  imports: [
    // envModule,
    TypeOrmModule.forRoot(typeormConnectionConfig),
    ProductsModule,
    TablesModule,
  ],
})
export class AppModule {}
