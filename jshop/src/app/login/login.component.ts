import { User } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User("","","","");
  usersFromServer: User[];
  constructor(private userService: UsersService, private router: Router){}

  ngOnInit(): void {
      this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      console.log(data)
      this.usersFromServer=data;
    });
  }
  newUser (){
    this.router.navigateByUrl('/reg');
  }
  
  onSubmit(loginForm) {
    for (let user of this.usersFromServer){
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
