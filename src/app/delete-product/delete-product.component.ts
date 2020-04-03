import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor() { }
public productid:any;

@Output('deleteEvent')
private delete:EventEmitter<any> = new EventEmitter<any>();
  ngOnInit(): void {
  }

  onDelete()
  {
    this.delete.emit(this.productid);
  }
}
