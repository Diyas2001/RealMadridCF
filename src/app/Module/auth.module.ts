import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import {AuthenticationService} from './auth.service';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from '../Components/home/login/login.component';
import {RegistrationComponent} from '../Components/home/registration/registration.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent
  ],
  imports: [AuthRoutingModule,
    CommonModule, FormsModule,],
  providers: [

  ],
})
export class AuthModule {private router: Router; private authenticationService: AuthenticationService
}
