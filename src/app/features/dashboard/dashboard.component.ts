import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  // HttpClient is Angular's built-in service for making HTTP requests
  private http = inject(HttpClient);

  // This property will hold the response from the backend
  apiStatus = '';

  // OnInit is a lifecycle hook — ngOnInit() runs once after the component loads
  // Think of it as "do this when the page first appears"
  ngOnInit() {
    // .get() sends a GET request and returns an Observable
    // .subscribe() listens for the response and runs a function when it arrives
    this.http.get<{ status: string }>('http://localhost:3000/api/health')
      .subscribe(response => {
        this.apiStatus = response.status; // ← stores "ok" from { status: "ok" }
      });
  }
}
