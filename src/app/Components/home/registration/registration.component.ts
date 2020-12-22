import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../../Module/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input() userDetails = { id: '',first_name :'', last_name:'', email:'', password:'',isAdmin:'false' }
  constructor(public userService: UserService, public router: Router) { }


  ngOnInit(): void {
  }
  addUser(dataUser){
    this.userService.createUser(this.userDetails).subscribe((data:{})=>{
      this.router.navigate(['login']);
    })
 }
}
