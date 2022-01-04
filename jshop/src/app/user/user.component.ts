import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private uS: UsersService) { }
  user1: any

  ngOnInit(): void {
    this.user1 = this.uS.savedUser
  }

}
