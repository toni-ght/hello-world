import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <h1>{{ title }}</h1>
      <!-- Navigation oder Logo kannst du hier einfügen -->
    </header>
  `,
  styles: [`
    .header {
      background-color: #1976d2;
      color: white;
      padding: 1rem;
      text-align: center;
    }
  `]
})
export class HeaderComponent {
  title = 'Mein Header'; // 🖊️ Passe den Titel hier an
}