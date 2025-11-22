import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from './profile.model';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {

  profile: Profile | undefined;

  constructor(private router: Router) {}

  navegar(){
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle(){
    
  }

  isLoggedIn(){
    return !!this.profile;
  }
}
