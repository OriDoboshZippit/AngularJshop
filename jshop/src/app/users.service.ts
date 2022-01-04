import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  savedUser = new User('','','','')
  getUsers(){
    return[
      new User('Veronika Bruy', 'veronikabruy@gmail.com', '333985596', 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'),
      new User('Ori Dobosh', 'dobosh.o@gmail.com', '323676882', 'https://i.pinimg.com/originals/19/99/a8/1999a87ab7b97cfc108edcf7b332a397.jpg'),
      new User('Mor Ashkenazi', 'mora@braude.ort.org.il', '123456789', 'https://i.pinimg.com/originals/f6/f5/9e/f6f59e4414981490319a8a4cdb92c03b.jpg'),
      new User('Avi Gavi', 'freddie@gmail.com', '123569789', 'https://i.pinimg.com/originals/79/16/fd/7916fd1c2e743cba7ff21d30c47212a6.jpg'),
      new User('Dora Rora', 'dorarara@gmail.com', '125874789', 'https://i.pinimg.com/originals/17/74/a0/1774a0269dd0b73f12acd5bad0e55e48.jpg')
    ]
  }
  constructor() { }
}

class User {
  name: string;
  email: string;
  password: string;
  avatar:string;

  constructor(name: string, email: string, password: string, avatar: string){
    this.name = name;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
  }
}
