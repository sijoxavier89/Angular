import { TestBed } from '@angular/core/testing';

import { ProductobsService } from './productobs.service';

describe('ProductobsService', () => {
  let service: ProductobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
