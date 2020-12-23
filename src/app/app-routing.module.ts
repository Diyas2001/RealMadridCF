import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Components/home/home.component';
import {PlayersComponent} from './Components/players/players.component';
import {PlayersCreatComponent} from './Components/players/players-creat/players-creat.component';
import {PlayersListComponent} from './Components/players/players-list/players-list.component';
import {PlayersEditComponent} from './Components/players/players-edit/players-edit.component';
import {TableComponent} from './Components/table/table.component';
import {AuthGuard} from './Guard/auth.guard';
import {OnlineComponent} from './Components/online/online.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'players', component: PlayersComponent, canActivate: [AuthGuard]},
  {path: 'creatPl', component: PlayersCreatComponent},
  {path: 'listPl', component: PlayersListComponent},
  {path: 'editPl/:id', component: PlayersEditComponent},
  {path: 'table', component: TableComponent},
  {path: 'online', component: OnlineComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
