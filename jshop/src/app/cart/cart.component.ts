import { Component, OnInit } from '@angular/core';
import { ServiceCartService } from '../service-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( private mew: ServiceCartService) { }
  products:any = []
  sum:number = 0;

  ngOnInit(): void {
    this.products = this.mew.getCart()
    this.SumOfProducts()
  }
  SumOfProducts(){
    for (let product of this.products){
        this.sum += product.price
    }
  }
  
  
}
