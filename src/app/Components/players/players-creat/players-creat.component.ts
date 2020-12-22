import {Component, Input, OnInit} from '@angular/core';
import {PlayersService} from '../Shared/players.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-players-creat',
  templateUrl: './players-creat.component.html',
  styleUrls: ['./players-creat.component.css']
})
export class PlayersCreatComponent implements OnInit {

  @Input() playerDetails = {firstName: '', lastName: '', email: '', number: 0 }

  constructor(public players: PlayersService, public router: Router) { }

  ngOnInit(): void {
  }

  addPlayer() {
    this.players.createPlayer(this.playerDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/listPl'])
      })
  }

}
