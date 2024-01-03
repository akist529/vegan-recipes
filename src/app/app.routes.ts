import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiaryComponent } from './diary/diary.component';
import { FoodsComponent } from './foods/foods.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        title: 'Dashboard Page'
    },
    {
        path: 'diary',
        component: DiaryComponent,
        title: 'Diary Page'
    },
    {
        path: 'foods',
        component: FoodsComponent,
        title: 'Foods Page'
    }
];
