import { User, UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  
  users = [];
  user = new User("","","",""); 
  baseURL: string = 'http://localhost:3000/';
  headers = { 'content-type':'application/json' };


  constructor(private router: Router, private UsersService: UsersService) {
 
   }  

   ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this.UsersService.getUsers().subscribe((data) => {
      console.log(data)
      this.users=data;
    });
  }
  
  // selectedFile = null;
  // onFileSelected(event){
  // // console.log(event);
  //   this.selectedFile = event.target.files[0];


  sendRegisterNewUser() {
    console.log("data");
    this.UsersService.sendRegisterNewUser(this.user).subscribe((data) => {
      console.log(data);
      this.getUsers();
    });
  }
  
 
  backToMain (){
    this.router.navigateByUrl('/login');
  }


}
  
export class user {
  public name: string;
  public email: string;
  public password :string;
  public avatar: string;
  
 
 constructor(
   name: string,
   email: string,
   password :string,
   avatar: string
  
 ) 
 {
   this.name = name;
   this.email = email;
   this.password = password;
   this.avatar = avatar;
 }
}




