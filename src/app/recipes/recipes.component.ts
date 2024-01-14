import { Component, inject, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DataService } from '../data.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerArrowBadgeLeftFilled, tablerArrowBadgeRightFilled } from '@ng-icons/tabler-icons';

interface Recipe {
  id: number,
  title: string,
  difficulty: string,
  image: string
}

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    NgIconComponent,
  ],
  viewProviders: [provideIcons({ tablerArrowBadgeLeftFilled, tablerArrowBadgeRightFilled })],
  providers: [DataService],
  template: `
    <div
      data-theme="cupcake"
      class="h-full pt-6 grid grid-rows-[auto_auto_auto_1fr] justify-items-center gap-6"
      (window:resize)="onResize()"
    >
      <h1 class="text-6xl text-center">Recipes</h1>
      <div class="flex flex-col sm:flex-row items-center gap-3">
        <label for="query">Search</label>
        <input
          type="text"
          name="query"
          id="query"
        />
        <button
          type="button"
          class="btn btn-ghost"
        >SUBMIT</button>
      </div>
      <div class="join">
        <button
          [class]="this.currentPage > 1 ? 'join-item btn' : 'join-item btn btn-disabled'"
          (click)="this.currentPage > 1 ? updatePage(this.currentPage - 1) : null"
        >
          <ng-icon
            name="tablerArrowBadgeLeftFilled"
            size="24"
          ></ng-icon>
        </button>
        <button
          *ngFor="let page of pageArrOne.slice(0, buttonsPerPage)"
          [class]="page === this.currentPage ? 'join-item btn btn-disabled' : 'join-item btn'"
          (click)="updatePage(page)"
        >{{ page }}</button>
        <button
          class="join-item btn btn-disabled"
          *ngIf="this.pageArrOne[this.pageArrOne.length - 1] !== this.pageArrTwo[0] - 1"
        >...</button>
        <button
          *ngFor="let page of pageArrTwo.slice(0, buttonsPerPage)"
          [class]="page === this.currentPage ? 'join-item btn btn-disabled' : 'join-item btn'"
          (click)="updatePage(page)"
        >{{ page }}</button>
        <button
        [class]="this.currentPage < this.pages ? 'join-item btn' : 'join-item btn btn-disabled'"
          (click)="this.currentPage < this.pages ? updatePage(this.currentPage + 1) : null"
        >
          <ng-icon
            name="tablerArrowBadgeRightFilled"
            size="24"
          ></ng-icon>
        </button>
      </div>
      <ul class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mx-auto">
        <li *ngFor="let recipe of recipes.slice((currentPage - 1) * recipesPerPage, currentPage * recipesPerPage)">
          <div class="card w-72 sm:w-72 md:w-80 h-96 bg-base-100 shadow-xl p-5">
            <figure>
              <img
                [src]="recipe['image']"
                alt="Recipe"
              />
            </figure>
            <div class="card-body">
              <h2>{{ recipe["title"] }}</h2>
            </div>
            <div class="card-actions justify-end">
              <a class="btn btn-primary" [href]="" target="_blank">See Recipe</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
  styleUrl: './recipes.component.scss'
})

export class RecipesComponent implements OnInit {
  dataService: any = inject(DataService);

  recipesPerPage = 8;
  buttonsPerPage = 0;
  currentPage = 1;

  recipes: Recipe[] = [];
  pages = 0;
  pageArrOne: number[] = [];
  pageArrTwo: number[] = [];

  constructor () { }

  ngOnInit () {
    this.dataService.getRecipes().then((data: Recipe[]) => {
      this.recipes = data;
      this.pages = Math.ceil(data.length / this.recipesPerPage);
      this.updatePage(this.currentPage);
      this.onResize();

      for (let i = 1; i <= 5; i++) {
        if (this.pages > i) {
          this.pageArrOne.push(i)
        }
      }

      for (let i = this.pages - 4; i <= this.pages; i++) {
        if (i > 0) {
          this.pageArrTwo.push(i)
        }
      }
    });
  }

  updatePage (page: number) {
    this.currentPage = page;

    if (page >= 3 && this.pageArrOne[4] < this.pageArrTwo[0] - 1) {
      let i = -2;

      for (let j = 0; j < this.pageArrOne.length; j++) {
        this.pageArrOne[j] = page + i;
        i++;
      }
    } else if (page === 2) {
      let i = -1;

      for (let j = 0; j < this.pageArrOne.length; j++) {
        this.pageArrOne[j] = page + i;
        i++;
      }
    }
  }

  pageRange () {
    let arr: number[] = [];

    for (let i = 1; i <= this.pages; i++) {
      arr.push(i)
    }

    return arr;
  }

  onResize () {
    if (window.innerWidth >= 1440) {
      this.buttonsPerPage = 7;
    } else if (window.innerWidth >= 1080) {
      this.buttonsPerPage = 6;
    } else if (window.innerWidth >= 720) {
      this.buttonsPerPage = 5;
    } else if (window.innerWidth >= 640) {
      this.buttonsPerPage = 4;
    } else if (window.innerWidth >= 480) {
      this.buttonsPerPage = 3;
    } else if (window.innerWidth >= 360) {
      this.buttonsPerPage = 2;
    } else {
      this.buttonsPerPage = 1;
    }
  }
}