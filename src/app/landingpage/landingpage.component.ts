import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from './profile.model';
import { Authgoogle } from '../../../authgoogle.service';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile: Profile | undefined;

  constructor(private router: Router, private loginService: Authgoogle) {}

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle(){
    this.loginService.login();
  }

  isLoggedIn(){
    const dadosGoogle = this.loginService.getLoggedInProfile();
    console.log("Dados Google", dadosGoogle);
    this.profile = dadosGoogle;
    return !!this.profile;
  }
}
