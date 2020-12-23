import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/home/header/header.component';
import { FooterComponent } from './Components/home/footer/footer.component';
import { NewsComponent } from './Components/home/news/news.component';
import { PlayersComponent } from './Components/players/players.component';
import { PlayersListComponent } from './Components/players/players-list/players-list.component';
import { PlayersCreatComponent } from './Components/players/players-creat/players-creat.component';
import { PlayersEditComponent } from './Components/players/players-edit/players-edit.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {PlayersService} from './Components/players/Shared/players.service';
import {AuthModule} from './Module/auth.module';
import {AuthenticationService} from './Module/auth.service';
import {UserService} from './Module/user.service';
import { TableComponent } from './Components/table/table.component';
import { OnlineTextComponent } from './Components/online/online-text/online-text.component';
import { OnlineComponent } from './Components/online/online.component';
import { ViewTextComponent } from './Components/online/view-text/view-text.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NewsComponent,
    PlayersComponent,
    PlayersListComponent,
    PlayersCreatComponent,
    PlayersEditComponent,
    TableComponent,
    OnlineTextComponent,
    OnlineComponent,
    ViewTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    AuthModule
  ],
  providers: [PlayersService, HttpClient, AuthenticationService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
