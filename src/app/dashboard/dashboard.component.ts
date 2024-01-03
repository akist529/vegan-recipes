import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  template: `
    <div data-theme="cupcake" class="flex justify-center items-center h-full">
      <h1>Dashboard Page</h1>
    </div>
  `,
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {

}