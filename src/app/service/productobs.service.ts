import { Injectable, ɵɵstylePropInterpolateV } from '@angular/core';
import { Observable, of, interval, ReplaySubject } from 'rxjs';
import { Product } from '../model/product.model';
import { ProductDatasource } from '../model/product.datasource';
import { delay } from 'rxjs/operators';

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
  public streamAllProducts(): ReplaySubject<Product> {

    const products = this.ds.getProducts();
    
    if(products.length === 0)
    {
      return;
    }
    const sequence = new ReplaySubject<Product>(1);
   
    let index = 0;
    
    sequence.next(products[index]);
    index +=1;
    
    const timer = setInterval(()=>{
      sequence.next(products[index]);
      index+=1;
      if(index === products.length)
      {
         clearInterval(timer);
      }
    },1000)
    
    return sequence;
  }
}