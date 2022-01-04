import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users = [];
  constructor (private userService: UsersService, private router: Router){}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
  user: any
  onSubmit(loginForm) {
    for (let user of this.users){
      if (user.email == loginForm.value.email && user.password == loginForm.value.password)
      {
        console.log('Valid user');
        this.router.navigateByUrl('/home');
        this.userService.savedUser = user
        return;
      }
    }alert ('Invalid user');
  }
}
