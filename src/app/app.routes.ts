import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TeamsComponent } from './features/teams/teams.component';
import { LoginComponent } from './features/auth/login/login.component';
import { TasksComponent } from './features/tasks/tasks.component';
import { AuthGuard } from '@auth0/auth0-angular';  // ← built-in guard from Auth0

export const routes: Routes = [
  // Redirect the empty path (root URL) to /dashboard
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'   // only redirect if the path is EXACTLY '' (not just starts with '')
  },

  // All authenticated app pages use MainLayoutComponent as their shell
  // canActivate: [AuthGuard] runs BEFORE any child route loads.
  // If the user is not logged in, Auth0 redirects them to the login page.
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],   // ← protects ALL children at once
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'tasks', component: TasksComponent },
    ]
  },

  // Login page uses AuthLayoutComponent as its shell
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent }
    ]
  }
];
