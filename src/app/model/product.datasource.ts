import { Product } from './product.model'

export class ProductDatasource {

   private  products:Product[];
   constructor(){
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
       this.products.push(product);
   }

   public deleteProduct(id:number):void{
       let index = this.products.findIndex(p=>p.id==id);
       this.products.splice(index,1);
   }
}
