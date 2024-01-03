import { Component } from '@angular/core';

@Component({
  selector: 'app-foods',
  standalone: true,
  imports: [],
  template: `
    <div data-theme="cupcake" class="flex justify-center items-center h-full">
      <h1>Foods Page</h1>
    </div>
  `,
  styleUrl: './foods.component.scss'
})

export class FoodsComponent {

}