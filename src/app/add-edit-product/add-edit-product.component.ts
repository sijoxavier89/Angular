import { Component, OnInit, Input, Output, TemplateRef, ContentChild } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Imagedir } from '../directive/imagedir.directive';
import { ValidationService } from '../service/validation.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css'],
  providers:[ValidationService]
})
export class AddEditProductComponent implements OnInit {
 public categories:string[] = ["Watersports","Soccer","Chess"];

  constructor(private productservice:ProductService,
    private validation:ValidationService) {

   }


  @Input('productId')
  private productId:any;

  private productData:any;

  @Output('cancelEvent')
  public cancelEvent:EventEmitter<any> = new EventEmitter<any>();
  
  public product:any;
  ngOnInit(): void {
    this.productData = this.productservice.getProduct(this.productId);
    this.product = {...this.productData}
  }

  onCancel()
  {
    console.log('cancel clicked');
    this.cancelEvent.emit();
  }
  
  onSave()
  {
    if(this.validation.Validate(this.product.price))
    {
    console.log(this.product.id);
    this.productservice.saveProduct(this.product);
    alert('product details saved');
    this.cancelEvent.emit();
    }else{
      alert('price validation has failed and no add or edit must take place');
    }
  }

}
