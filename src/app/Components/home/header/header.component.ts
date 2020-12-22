import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../Module/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = localStorage.getItem('username');

  constructor(private auth: AuthenticationService) { }

  ngOnInit(): void {
  }

}
