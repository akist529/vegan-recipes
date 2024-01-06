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
      <button type="button" (click)="getData()">SUBMIT</button>
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

  constructor () { }

  getData () {
    const input = document.getElementById('query') as HTMLInputElement;
    const query = input.value;

    this.dataService.getRecipes(query).then((recipes: any) => {
      this.recipes = recipes;
    })
  }
}