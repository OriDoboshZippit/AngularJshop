import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceCartService {

  constructor() { }

  ProductinCart: any = []
  sum: number

  AddtoCart(p){
    this.ProductinCart.push(p)
  }
  getCart(){
    console.log(this.ProductinCart)
    return this.ProductinCart
  }
 

}

