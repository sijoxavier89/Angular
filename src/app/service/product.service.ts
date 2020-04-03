import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  products:Product[];
  constructor(private logger:LoggerService){
      this.products = new Array<Product>(
       new Product(1, "Kayak", "Watersports", 275),
       new Product(2, "Lifejacket", "Watersports", 48.95),
       new Product(3, "Soccer Ball", "Soccer", 19.50),
       new Product(4, "Corner Flags", "Soccer", 34.95),
       new Product(5, "Thinking Cap", "Chess", 16)
      
      )
  }

 public getProducts():Product[]{
      return this.products;
  }

 public getProduct(id:number):Product{
      return this.products.find(p => p.id==id);
  }

 public saveProduct(product:Product):void{
   let index = this.products.findIndex(p=>product.id == p.id);
     if(index == -1)
     {
      this.products.push(product);
      this.logger.Message ="new product added";
      this.logger.Log();
     }else{
       console.log(index+'updated');
       this.products.splice(index,1,product);
       this.logger.Message =index+"product updated";
      this.logger.Log();
     }
  }

  public deleteProduct(id:number):void{
      let index = this.products.findIndex(p=>p.id==id);
      this.products.splice(index,1);
      this.logger.Message =index+"product deleted";
      this.logger.Log();
  }
}
