import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductDatasource } from '../model/product.datasource';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class ProductobsService {

  private ds: ProductDatasource = new ProductDatasource();
  constructor() { }

  public getAllProducts(): Observable<Product[]> {
    let ob: Observable<Product[]> = of(this.ds.getProducts());
    return ob;
  }

  // to push product after every 1 sec 
  // using observable
  public streamAllProducts(): Observable<Product> {

    const products = this.ds.getProducts();
    const len = products.length;
    let i = 0

    const sequence = new Observable((observer) => {

      products.forEach(element => {


        setTimeout(() => {
          observer.next(products[i]);
        }, 1000
        );
      });


    });
    return sequence;
  }
}