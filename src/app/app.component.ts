import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent],
  template: `
    <app-header></app-header> <!-- ✅ Header verwendet -->
    <router-outlet></router-outlet> <!-- Hier kommt dein Hauptinhalt -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';
}
