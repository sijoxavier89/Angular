import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { 
    console.log("LoggerService instance created");
  }
  private logmessage:string;

  


  set Message(message:string)
  {
  this.logmessage = message;
  }
  public Log():void
  {
  console.log(this.logmessage);
  }
}
