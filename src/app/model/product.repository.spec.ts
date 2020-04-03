import { ProductRepository } from './product.repository';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new ProductRepository()).toBeTruthy();
  });
});
