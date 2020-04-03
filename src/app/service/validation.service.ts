import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

constructor()
 {
    console.log("ValidationService instance created");
 }
 public Validate(price:number):boolean
 {
   return (price > 0 && (price >= 1000 && price <= 10000));
 }

}
