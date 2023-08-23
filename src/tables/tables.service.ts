import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTableDto } from './dto/index';
import { Table } from './table.entity';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(Table) private tableRepository: Repository<Table>,
  ) {}

  async getAll(): Promise<Table[]> {
    return await this.tableRepository.find();
  }

  async getOneById(id: number): Promise<Table> {
    try {
      return await this.tableRepository.findOneOrFail({
        where: { table_id: id },
      });
    } catch (err) {
      console.log('Get one product by id error: ', err.message ?? err);
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async create(table: CreateTableDto): Promise<Table> {
    const createdTable = this.tableRepository.create(table);
    return await this.tableRepository.save(createdTable);
  }

  async delete(id: number): Promise<number> {
    const foundProduct = await this.tableRepository.findOneBy({
      table_id: id,
    });

    if (!foundProduct) {
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }

    await this.tableRepository.delete(id);
    return foundProduct.table_id;
  }
}
