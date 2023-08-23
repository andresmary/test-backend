import { Table } from '../table.entity';

export const tablesStub = (): Table[] => {
  return [
    {
      table_id: 1,
      table: 'mesa 1',
      created_at: new Date('2022-07-06T08:13:25.000Z'),
      updated_at: new Date('2022-07-06T08:13:25.000Z'),
    },
    {
      table_id: 1,
      table: 'mesa 2',
      created_at: new Date('2022-07-06T08:13:25.000Z'),
      updated_at: new Date('2022-07-06T08:13:25.000Z'),
    },
  ];
};

export const tableStub = (): Table => {
  return {
    table_id: 1,
    table: 'mesa 2',
    created_at: new Date('2022-07-06T08:13:25.000Z'),
    updated_at: new Date('2022-07-06T08:13:25.000Z'),
  };
};
