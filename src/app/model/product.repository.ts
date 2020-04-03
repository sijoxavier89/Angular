import { ProductDatasource } from './product.datasource';
import { Product } from './product.model';

export class ProductRepository {
    private dataSource:any;
    private products:any;
    private locator = (p:Product,id:number)=> p.id == id;
    constructor()
    {
this.dataSource = new ProductDatasource()
this.products = this.dataSource.getProducts();
    }

    getProducts():Product[]{
    return this.products;
    }

    getProduct(id:number):Product{
        return this.products.find(p =>this.locator(p,id));
    }

    saveProduct(newProduct:Product):void{
        this.dataSource.saveProduct(newProduct);
    }

    deleteProduct(id:number):void{
        this.dataSource.deleteProduct(id);
    }
}
