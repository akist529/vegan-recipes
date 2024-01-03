import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerDashboard, tablerNotebook, tablerMeat } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule, 
    NgIconComponent, 
  ],
  viewProviders: [provideIcons({ tablerDashboard, tablerNotebook, tablerMeat })], 
  template: `
    <nav class='navbar' data-theme="coffee">
      <div class='flex-1 prose lg:prose-xl'>
        <h1>Food Tracker</h1>
      </div>
      <ul class='flex-none'>
        <li>
          <a
            [routerLink]="['/']"
            class='btn btn-ghost'
          >
            <ng-icon name="tablerDashboard"></ng-icon>
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a
            [routerLink]="['/diary']"
            class='btn btn-ghost'
          >
            <ng-icon name="tablerNotebook"></ng-icon>
            <span>Diary</span>
          </a>
        </li>
        <li>
          <a
            [routerLink]="['/foods']"
            class='btn btn-ghost'
          >
            <ng-icon name="tablerMeat"></ng-icon>
            <span>Foods</span>
          </a>
        </li>
      </ul>
    </nav>
  `,
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

}
