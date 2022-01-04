import { Component, Input, OnInit } from '@angular/core';
import { RingsService } from '../rings.service';
import { ServiceCartService } from '../service-cart.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  constructor(private es: RingsService, private mew: ServiceCartService) { }
  Products:any = []
  @Input() selectedCategory1: String;
  ngOnInit(): void {
    this.Products = this.es.getProducts()
    this.discount();
  }
  AddtoCart(p){
    this.mew.AddtoCart(p)
  }
  discount(){
    for (let product of this.Products){
      if (product.id == 104 || product.id == 105 || product.id == 203 || product.id == 308 || product.id == 310 )
        product.price *= 0.8
    }
  }

  
} 
 
