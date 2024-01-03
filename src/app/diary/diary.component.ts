import { Component } from '@angular/core';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [],
  template: `
    <div data-theme="cupcake" class="flex justify-center items-center h-full">
      <h1>Diary Page</h1>
    </div>
  `,
  styleUrl: './diary.component.scss'
})

export class DiaryComponent {

}