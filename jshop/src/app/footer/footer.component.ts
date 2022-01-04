import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  shopname: string = "Chrystal Shop";
  address : string = "Karmiel, Big Center";
  tel: string = "1-700-35-15-01";
  rights: string = "All rights reserved."

}
