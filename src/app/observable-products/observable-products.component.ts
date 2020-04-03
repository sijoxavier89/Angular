import { Component, OnInit } from '@angular/core';
import { ProductobsService } from '../service/productobs.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-observable-products',
  templateUrl: './observable-products.component.html',
  styleUrls: ['./observable-products.component.css']
})
export class ObservableProductsComponent implements OnInit {

  constructor(private prodservice:ProductobsService) { }
  public products:any;
  public streamproducts:any[];
  public product:Product;
  ngOnInit(): void {
    
  }

  GetAllProducts()
  {
    this.prodservice.getAllProducts().subscribe(p => {
      this.products = p;
    })
  }

  StreamAllProducts()
  {
    
    this.streamproducts = new Array<any>();
    this.prodservice.streamAllProducts().subscribe(p => {
      this.streamproducts.push(p);
      console.log(p);
    })
  }

}
