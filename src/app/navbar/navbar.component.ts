import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule
  ],
  template: `
    <nav>
      <ul>
        <li>
          <a [routerLink]="['/']">Dashboard</a>
          <a [routerLink]="['/diary']">Diary</a>
          <a [routerLink]="['/foods']">Foods</a>
        </li>
      </ul>
    </nav>
  `,
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

}
