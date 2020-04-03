import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  showAllProducts:boolean= false;
  showSearch :boolean = false;
  showAddEdit:boolean = false;
  showDelete:boolean = false;

  public prodId:any;

  showSection:string='';

  @ViewChild('myTemplate') myTemplateRef; 

  constructor() { }

  ngOnInit(): void {
  }

  toggleAllProducts():void
  {
    this.showAllProducts = !this.showAllProducts;
    this.showSection = 'all';
  }
  toggleSearchProduct():void
  {
    console.log('search');
    this.showSearch = !this.showSearch;
    this.showSection = 'search';
  }
  toggleAddEditProduct():void
  {
    this.showAddEdit = !this.showAddEdit;
    this.showSection = 'addedit';
  }
  toggleDeleteProduct():void
  {
    this.showDelete = !this.showDelete;

    this.showSection = 'delete';
  }

  onSearch(textval:any)
  {
    this.prodId = textval;
    console.log(this.prodId);
  }

  onCancel()
  {
    console.log('cancelled');
    this.showSection = '';
  }
  onDelete(id:number)
  {
    this.prodId = id;
  }
}
