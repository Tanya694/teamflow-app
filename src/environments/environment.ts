// environment.ts — development configuration
// This file is used when running `ng serve` (local development).
// NEVER commit real secrets here if this file is tracked by Git.
// For now our Auth0 values are safe here since they are not secret keys —
// client IDs for SPAs are intentionally public-facing.

export const environment = {
  production: false,   // tells the app it's running in dev mode

  auth0: {
    domain: 'dev-q1eyefr2wboofgoe.us.auth0.com',      // e.g. dev-xxxxxxxx.us.auth0.com
    clientId: 'hZgw6yeU5ciyRoPBSdz6vWdVrvosljGT', // from Auth0 dashboard → Application Settings
    redirectUri: 'http://localhost:4200'  // where Auth0 sends the user after login
  }
};
