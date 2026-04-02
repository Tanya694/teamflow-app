import { Component, inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';  // ← Auth0's service

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  // inject() is Angular's modern way to use Dependency Injection.
  // Angular sees we need AuthService and provides it automatically.
  private auth = inject(AuthService);

  // Called when the user clicks the login button
  login() {
    // Redirects the browser to Auth0's login page.
    // After the user logs in, Auth0 redirects back to our redirectUri.
    this.auth.loginWithRedirect();
  }
}
