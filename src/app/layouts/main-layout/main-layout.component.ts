import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AsyncPipe, NgIf } from '@angular/common';  // ← AsyncPipe for observables, NgIf for *ngIf

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, AsyncPipe, NgIf],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

  // Inject AuthService — gives us access to user info and logout
  auth = inject(AuthService);

  // auth.user$ is an Observable that emits the logged-in user's profile.
  // The $ suffix is a convention — it signals "this is an Observable"
  user$ = this.auth.user$;

  logout() {
    // Clears the session and redirects to our app's root URL
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}
