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
          *ngFor="let page of pageRange()"
          class="join-item btn"
          (click)="updatePage(page)"
        >{{ page }}</button>
      </div>
      <ul class="grid grid-cols-4 gap-4">
        <li *ngFor="let recipe of recipes.slice((currentPage - 1) * count, currentPage * count)">
          <div class="card w-96 bg-base-100 shadow-xl p-5">
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
  dataService: any = inject(DataService);

  count = 8;
  currentPage = 1;

  recipes: any = JSON.parse(sessionStorage.getItem('recipes') || '[]') ?? [];
  pages: number = Math.ceil(this.recipes.length / this.count) ?? 0;


  constructor () { }

  getData () {
    const input = document.getElementById('query') as HTMLInputElement;
    const query = input.value;

    this.dataService.getRecipes(query).then((data: any) => {
      sessionStorage.setItem('recipes', JSON.stringify(data['recipes']));
      this.recipes = data['recipes'];
      this.pages = Math.ceil(this.recipes.length / this.count);
    })
  }

  updatePage (page: number) {
    this.currentPage = page;
  }

  pageRange () {
    let arr: number[] = [];

    for (let i = 1; i <= this.pages; i++) {
      arr.push(i)
    }

    return arr;
  }
}