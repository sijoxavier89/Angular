import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import {FormsModule} from '@angular/forms';
import { ObservableProductsComponent } from './observable-products/observable-products.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AllProductsComponent,
    SearchProductComponent,
    AddEditProductComponent,
    DeleteProductComponent,
    ObservableProductsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
