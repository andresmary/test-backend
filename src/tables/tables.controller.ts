import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateTableDto } from './dto/index';
import { Table } from './table.entity';
import { TablesService } from './tables.service';

@Controller('tables')
export class TablesController {
  constructor(private tablesService: TablesService) {}

  @Get()
  async GetAll(): Promise<Table[]> {
    return this.tablesService.getAll();
  }

  @Get(':id')
  async GetOne(@Param('id', ParseIntPipe) id: number): Promise<Table> {
    return this.tablesService.getOneById(id);
  }

  @Post()
  async create(@Body() table: CreateTableDto): Promise<Table> {
    return this.tablesService.create(table);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<number> {
    return this.tablesService.delete(id);
  }
}
