import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    NgFor
  ],
  providers: [DataService],
  template: `
    <div data-theme="cupcake" class="flex justify-center items-center h-full">
      <h1>Recipes Page</h1>
      <input type="text" name="query" id="query" />
      <div>
        <ul>
          <li *ngFor="let recipe of recipes">
            {{ recipe["recipe"]["label"] }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrl: './recipes.component.scss'
})

export class RecipesComponent {
  recipes: any = []
  dataService: any = inject(DataService)

  constructor () {
    this.dataService.getRecipes('tofu').then((recipes: any) => {
      this.recipes = recipes;
    })
  }
}