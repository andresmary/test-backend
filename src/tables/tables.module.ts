import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Table } from './table.entity';
import { TablesController } from './tables.controller';
import { TablesService } from './tables.service';

@Module({
  imports: [TypeOrmModule.forFeature([Table])],
  controllers: [TablesController],
  providers: [TablesService],
})
export class TablesModule {}
