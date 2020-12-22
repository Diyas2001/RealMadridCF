import {Injectable, OnInit} from '@angular/core';
import {UserService} from "./user.service";
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
  constructor(private userService : UserService, private http: HttpClient) {
  }
  User = this.userService.getUsers().subscribe(data => this.User = data)

  login(username: string, password: string) {
    for (let user of this.User) {
      if (username == user.email && password == user.password) {
        localStorage.setItem('currentUser', "loggedin");
        localStorage.setItem('username',username);
        console.log("Correct")
        return true;
      }
    }

  }
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('username');
    window.location.reload();
  }
  public get loggedIn(): boolean {
    return (localStorage.getItem('currentUser') !== null);
  }

}
