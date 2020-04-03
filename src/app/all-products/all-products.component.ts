import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';
import { ProductService } from '../service/product.service';
import { LoggerService } from '../service/logger.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
  providers: [ LoggerService ]
})
export class AllProductsComponent implements OnInit {

  constructor(private prodService:ProductService,
    private logger:LoggerService) { 
      console.log("All products component created");
    }

  public products:Product[];
  private repo:any;
 public confirmDelete:boolean = false;
  public currencySelected:any = "INR";
  public currencies:string[] = ["USA","INR","UK"];
 
  @Input()
  imageTemplate: TemplateRef<any>;

  @Input("productId")
  public productId:any;

  ngOnInit(): void {
  // this.repo = new ProductRepository();
   this.products = this.prodService.getProducts();
   console.log("All products Init called");
   
  }

  changeCurrency():void
  {
    console.log(this.currencySelected);
    //this.currencySelected = newcurrency;
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    this.logger.Message = this.currencySelected+' '+ 'selected at'+ time;
    this.logger.Log();
  }

  showConfirm()
  {
    this.confirmDelete = true;
  }
  
  deleteProduct()
  {
    this.prodService.deleteProduct(this.productId);
    this.confirmDelete = false;
  }

  cancelDelete()
  {
    this.confirmDelete = false;
    this.productId = -1;
  }
}
