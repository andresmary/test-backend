import { Product } from '../product.entity';

export const productsStub = (): Product[] => {
  return [
    {
      vote_id: 1,
      table: 1,
      name: 2,
      vote: 8,
      created_at: new Date('2022-07-06T08:13:25.000Z'),
      updated_at: new Date('2022-07-06T08:13:25.000Z'),
    },
    {
      vote_id: 1,
      table: 1,
      name: 2,
      vote: 8,
      created_at: new Date('2022-07-06T08:13:25.000Z'),
      updated_at: new Date('2022-07-06T08:13:25.000Z'),
    },
  ];
};

export const productStub = (): Product => {
  return {
    vote_id: 1,
    table: 1,
    name: 2,
    vote: 8,
    created_at: new Date('2022-07-06T08:13:25.000Z'),
    updated_at: new Date('2022-07-06T08:13:25.000Z'),
  };
};
