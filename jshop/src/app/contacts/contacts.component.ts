import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }
 


  ngOnInit(): void {
  }
  welcome: string = "WE’RE HERE FOR YOU!"
  where:string = "Where is my Order?"
  callus:string = "Call Us"
  
  usersList: any =[
    {ID:333985596, name: "Veronika Bruy",tel:"054-582-4072", avatar: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'},
    {ID:323676882, name: "Ori Dobosh", tel: "054-674-9170", avatar: "https://i.pinimg.com/originals/19/99/a8/1999a87ab7b97cfc108edcf7b332a397.jpg" }

  ]


}
