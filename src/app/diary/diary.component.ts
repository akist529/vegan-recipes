import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerMeat, tablerWeight } from '@ng-icons/tabler-icons';
import { ionBody } from '@ng-icons/ionicons';

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [
    NgIconComponent, 
  ],
  viewProviders: [provideIcons({ tablerMeat, tablerWeight, ionBody })], 
  template: `
    <div data-theme="cupcake" class="h-full">
      <div role="tablist" class="tabs tabs-bordered tabs-lg">
        <a
          role="tab"
          [class]="activeTab == 0 ? [tabClasses, activeTabClass].join(' ') : tabClasses"
          (click)="setActiveTab(0)"
        >
          <ng-icon
            name="tablerMeat"
            [size]="this.device === 'desktop' ? '32' : '24'"
          ></ng-icon>
          Food
        </a>
        <a
          role="tab"
          [class]="activeTab == 1 ? [tabClasses, activeTabClass].join(' ') : tabClasses"
          (click)="setActiveTab(1)"
        >
          <ng-icon
            name="ionBody"
            [size]="this.device === 'desktop' ? '32' : '24'"
          ></ng-icon>
          Exercise
        </a>
        <a
          role="tab"
          [class]="activeTab == 2 ? [tabClasses, activeTabClass].join(' ') : tabClasses"
          (click)="setActiveTab(2)"
        >
          <ng-icon
            name="tablerWeight"
            [size]="this.device === 'desktop' ? '32' : '24'"
          ></ng-icon>
          Weight
        </a>
      </div>
    </div>
  `,
  styleUrl: './diary.component.scss'
})

export class DiaryComponent {
  activeTab = 0;
  tabClasses = 'tab pt-3';
  activeTabClass = 'tab-active';

  device = (() => {
    if (window.innerWidth < 480) {
      return 'mobile';
    } else if (window.innerWidth < 1080) {
      return 'tablet';
    } else {
      return 'desktop';
    }
  })();

  setActiveTab (tab: number) {
    this.activeTab = tab;
  }

  onResize () {
    if (window.innerWidth < 480) {
      this.device = 'mobile';
    } else if (window.innerWidth < 1080) {
      this.device = 'tablet';
    } else {
      this.device = 'desktop';
    }
  }
}