import { Component, OnInit } from '@angular/core';
import {PlayersService} from '../Shared/players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  Player: any = [];

  constructor(public players: PlayersService) { }

  ngOnInit() {
    this.loadPlayers();
  }
  loadPlayers() {
    return this.players.getPlayers().subscribe( data => this.Player = data);
  }

  deletePlayer(id) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.players.deletePlayer(id).subscribe(data => this.loadPlayers());
    }
  }



}
