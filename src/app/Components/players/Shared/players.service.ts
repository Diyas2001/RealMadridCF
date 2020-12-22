import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Players} from './players.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  apiUrl = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getPlayers(): Observable<Players> {
    return this.http.get<Players>(this.apiUrl + '/Players');
  }
  createPlayer(player): Observable<Players> {
    return this.http.post<Players>(this.apiUrl + '/Players', JSON.stringify(player), this.httpOptions);
  }
  getPlayer(id): Observable<Players>{
    return this.http.get<Players>(this.apiUrl + '/Players/' + id);
  }
  updatePlayer(id, player): Observable<Players> {
    return this.http.put<Players>(this.apiUrl + '/Players/' + id, JSON.stringify(player), this.httpOptions);
  }
  deletePlayer(id) {
    return this.http.delete<Players>(this.apiUrl + '/Players/' + id);
  }
}

