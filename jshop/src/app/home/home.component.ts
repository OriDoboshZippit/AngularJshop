import { Component, OnInit } from '@angular/core';
import { RingsService } from '../rings.service';
import { ServiceCartService } from '../service-cart.service';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private es: RingsService, private userService: UsersService) { }
  
  user: any
  ngOnInit(): void {
    this.Products = this.es.getProducts()
    this.user = this.userService.savedUser
  }
  
  
  Products:any[]

  vUser:string = '';
  

}
