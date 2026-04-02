import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';   // ← Auth0's Angular provider
import { environment } from '../environments/environment';  // ← our config values

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    // Register Auth0 with our app — reads domain and clientId from environment.ts
    // This makes the AuthService available for injection anywhere in the app
    provideAuth0({
      domain: environment.auth0.domain,
      clientId: environment.auth0.clientId,
      authorizationParams: {
        redirect_uri: environment.auth0.redirectUri  // where to land after login
      },
      // Store tokens in localStorage so they survive across tabs and page refreshes.
      // Without this, tokens live only in memory and are lost when a new tab opens.
      cacheLocation: 'localstorage',
      // Use refresh tokens to silently get a new access token in new tabs
      // without forcing a full redirect to Auth0's login page.
      useRefreshTokens: true
    })
  ]
};
