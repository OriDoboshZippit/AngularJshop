import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  Category = ["Rings", "Bracelets", "Watches", "Necklace"]

  selectedCategory: String = "";

  showRings(){
    this.selectedCategory = this.Category[0]
  }
  showBraceletes(){
    this.selectedCategory = this.Category[1];
  }
  showWatches(){
    this.selectedCategory = this.Category[2];
  }
  showNecklace(){
    this.selectedCategory = this.Category[3];
  }
}
