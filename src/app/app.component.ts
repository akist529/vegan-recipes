import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';
// COMPONENTS
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterModule, 
    DashboardComponent, 
    IngredientsComponent, 
    RecipesComponent, 
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'vegan-recipes';
}