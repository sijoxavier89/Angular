import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableProductsComponent } from './observable-products.component';

describe('ObservableProductsComponent', () => {
  let component: ObservableProductsComponent;
  let fixture: ComponentFixture<ObservableProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
