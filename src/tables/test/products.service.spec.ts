import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Table } from '../table.entity';
import { TablesService } from '../tables.service';
import { mockProductsRepository } from './mockProductsRepository';
import { tablesStub, tableStub } from './product.stub';

describe('TablesService', () => {
  let service: TablesService;
  let productRepository: Repository<Table>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TablesService,
        {
          provide: getRepositoryToken(Table),
          useValue: mockProductsRepository,
        },
      ],
    }).compile();

    service = module.get<TablesService>(TablesService);
    productRepository = module.get(getRepositoryToken(Table));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array of products', async () => {
      const cats = await service.getAll();
      expect(cats).toEqual(tablesStub());
    });
  });

  describe('getOneById', () => {
    it('should get a single product', () => {
      expect(service.getOneById(1)).resolves.toEqual(tableStub());
      expect(productRepository.findOneOrFail).toBeCalledWith({
        where: { product_id: 1 },
      });
    });

    it("should return an http error when product id doesn't exist", async () => {
      const id = 10;
      const spy = jest
        .spyOn(productRepository, 'findOneOrFail')
        .mockImplementationOnce(() => {
          throw new HttpException(
            `Product with id ${id} not found.`,
            HttpStatus.NOT_FOUND,
          );
        });
      await expect(service.getOneById(id)).rejects.toThrowError(HttpException);
      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith({
        where: { product_id: id },
      });
    });
  });

  describe('create', () => {
    it('should successfully create a product', () => {
      expect(service.create(tableStub())).resolves.toEqual(tableStub());
      expect(productRepository.create).toBeCalledTimes(1);
      expect(productRepository.create).toBeCalledWith(tableStub());
      expect(productRepository.save).toBeCalledTimes(1);
    });
  });

  describe('delete', () => {
    it('should delete a product', async () => {
      const deletedId = await service.delete(1);
      expect(deletedId).toEqual(1);
      expect(productRepository.findOneBy).toBeCalledTimes(1);
      expect(productRepository.findOneBy).toBeCalledWith({
        product_id: 1,
      });
      expect(productRepository.delete).toBeCalledTimes(1);
    });

    it("should return an http error when product id doesn't exist", async () => {
      const id = 10;
      const spy = jest
        .spyOn(productRepository, 'findOneBy')
        .mockImplementationOnce(() => undefined);
      await expect(service.delete(id)).rejects.toThrowError(HttpException);
      expect(spy).toBeCalledTimes(1);
      expect(spy).toBeCalledWith({
        product_id: id,
      });
      expect(productRepository.delete).toBeCalledTimes(0);
    });
  });
});
