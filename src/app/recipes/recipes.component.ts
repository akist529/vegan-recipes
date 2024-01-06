import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [],
  template: `
    <div data-theme="cupcake" class="flex justify-center items-center h-full">
      <h1>Recipes Page</h1>
    </div>
  `,
  styleUrl: './recipes.component.scss'
})

export class RecipesComponent {

}