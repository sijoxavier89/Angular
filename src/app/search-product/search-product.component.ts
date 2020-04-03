import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  constructor() { }
  @Output('searchtext')
 searchtext: EventEmitter<any> = new EventEmitter<any>();

 public productid:any;
  ngOnInit(): void {
  }
 
  onSearch()
  {
    this.searchtext.emit(this.productid);
  }
}
