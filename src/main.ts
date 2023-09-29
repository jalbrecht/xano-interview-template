import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular
    </a>
  `,
})
export class App {
  name = 'Angular';
  // List Endpoint: https://x9qk-rkcz-tbuf.n7.xano.io/api:aef8tvJ0/jeopardy
  // Optional params: page=1

  // Single endpoint: https://x9qk-rkcz-tbuf.n7.xano.io/api:aef8tvJ0/jeopardy/:id

  constructor(private httpClient: HttpClient) {}
}

bootstrapApplication(App);
