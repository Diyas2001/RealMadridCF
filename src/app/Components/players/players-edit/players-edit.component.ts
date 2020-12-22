import { Component, OnInit } from '@angular/core';
import {PlayersService} from '../Shared/players.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-players-edit',
  templateUrl: './players-edit.component.html',
  styleUrls: ['./players-edit.component.css']
})
export class PlayersEditComponent implements OnInit {
 id = this.actRoute.snapshot.params['id'];
 playerData: any = {};

  constructor(
    public players: PlayersService,
    public actRoute: ActivatedRoute,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.players.getPlayer(this.id).subscribe(data => this.playerData = data);
  }
  updatePlayer() {
    if(window.confirm('Are you sure you want to update?')) {
      this.players.updatePlayer(this.id, this.playerData).subscribe(data => {
        this.router.navigate(['/listPl'])
      })
    }
  }


}
