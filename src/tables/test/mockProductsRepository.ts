import { Table } from '../table.entity';
import { tablesStub, tableStub } from './product.stub';

export const mockProductsRepository = {
  find: jest.fn().mockResolvedValue(tablesStub()),
  findOneOrFail: jest.fn().mockResolvedValue(tableStub()),
  findOneBy: jest.fn().mockResolvedValue(tableStub()),
  create: jest.fn().mockResolvedValue(tableStub()),
  save: jest.fn((product: Table) => product),
  delete: jest.fn((id: number) => id),
};
