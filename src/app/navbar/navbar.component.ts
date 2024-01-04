import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerDashboard, tablerNotebook, tablerMeat, tablerMoon, tablerMenu2 } from '@ng-icons/tabler-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule, 
    NgIconComponent, 
  ],
  viewProviders: [provideIcons({ tablerDashboard, tablerNotebook, tablerMeat, tablerMoon, tablerMenu2 })], 
  template: `
    <nav class="navbar flex gap-3 justify-center items-center px-2 sm:px-12 md:px-24" data-theme="coffee" (window:resize)="onResize()">
      <h1 class="flex-initial">Food Tracker</h1>
      @if (width < 380) {
        <details class="dropdown">
          <summary class="btn btn-ghost flex-1 justify-center">
            <ng-icon
              name="tablerMenu2"
              size="32"
            ></ng-icon>
          </summary>
          <ul class="p-2 shadow menu dropdown-content z-[1] rounded-box">
            <li>
              <a
                [routerLink]="['/']"
                class="btn btn-sm btn-ghost"
              >
                <ng-icon
                  name="tablerDashboard"
                  [size]="width < 480 ? '24' : '32'"
                ></ng-icon>
                Dashboard
              </a>
            </li>
            <li>
              <a
                [routerLink]="['/diary']"
                class="btn btn-sm btn-ghost"
              >
                <ng-icon
                  name="tablerNotebook"
                  [size]="width < 480 ? '24' : '32'"
                ></ng-icon>
                Diary
              </a>
            </li>
            <li>
              <a
                [routerLink]="['/foods']"
                class="btn btn-sm btn-ghost"
              >
                <ng-icon
                  name="tablerMeat"
                  [size]="width < 480 ? '24' : '32'"
                ></ng-icon>
                Foods
              </a>
            </li>
          </ul>
        </details>
      }
      @else {
        <ul class='flex-1 justify-center items-center'>
          <li class="px-2">
            <a
              [routerLink]="['/']"
              class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost"
            >
              <ng-icon
                name="tablerDashboard"
                [size]="width < 480 ? '24' : '32'"
              ></ng-icon>
              Dashboard
            </a>
          </li>
          <li class="px-2">
            <a
              [routerLink]="['/diary']"
              class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost"
            >
              <ng-icon
                name="tablerNotebook"
                [size]="width < 480 ? '24' : '32'"
              ></ng-icon>
              Diary
            </a>
          </li>
          <li class="px-2">
            <a
              [routerLink]="['/foods']"
              class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-ghost"
            >
              <ng-icon
                name="tablerMeat"
                [size]="width < 480 ? '24' : '32'"
              ></ng-icon>
              Foods
            </a>
          </li>
        </ul>
      }
      <button class="flex-initial btn btn-circle btn-ghost">
        <ng-icon
          name="tablerMoon"
          size="32"
        ></ng-icon>
      </button>
    </nav>
  `,
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  width = window.innerWidth;

  onResize () {
    this.width = window.innerWidth;
  }
}
