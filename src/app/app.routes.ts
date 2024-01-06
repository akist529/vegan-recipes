import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { RecipesComponent } from './recipes/recipes.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        title: 'Dashboard Page'
    },
    {
        path: 'ingredients',
        component: IngredientsComponent,
        title: 'Ingredients Page'
    },
    {
        path: 'recipes',
        component: RecipesComponent,
        title: 'Recipes Page'
    }
];
