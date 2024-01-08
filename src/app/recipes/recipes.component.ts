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
    <div
      data-theme="cupcake"
      class="h-full pt-6 grid grid-rows-[auto_auto_auto_1fr]"
    >
      <h1 class="text-6xl text-center">Recipes</h1>
      <div class="flex justify-center items-center gap-3">
        <label for="query">Search</label>
        <input
          type="text"
          name="query"
          id="query"
        />
        <button
          type="button"
          class="btn btn-ghost"
          (click)="getData()"
        >SUBMIT</button>
      </div>
      <div class="join">
        <button
          *ngFor="let page of pages"
          class="join-item btn"
          (click)="updatePage(page + 1)"
        >{{ page + 1 }}</button>
      </div>
      <ul class="grid grid-cols-4 gap-4">
        <li *ngFor="let recipe of recipes">
          <div class="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img [src]="recipe['recipe']['image']" alt="Recipe"/>
            </figure>
            <div class="card-body">
              <h2>{{ recipe["recipe"]["label"] }}</h2>
            </div>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">See Recipe</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
  styleUrl: './recipes.component.scss'
})

export class RecipesComponent {
  recipes: any = []
  pages = new Array(Math.ceil(this.recipes.length / 8)).fill(true).map((x, i) => i)
  dataService: any = inject(DataService)
  currentPage = 1
  count = 8

  constructor () { }

  getData () {
    const input = document.getElementById('query') as HTMLInputElement;
    const query = input.value;

    this.dataService.getRecipes(query, this.currentPage, this.count).then((data: any) => {
      this.recipes = data['recipes'];
      console.log(data['recipes'].length)
      this.pages = new Array(Math.ceil(data['count'] / 8)).fill(true).map((x, i) => i);
    })
  }

  updatePage (page: number) {
    this.currentPage = page;
    this.getData();
  }
}