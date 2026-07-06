// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-midwest-us',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m1.2 14.011.894-9.757H9.14a1 1 0 0 1 .204.02l3.766.788-1.064 1.214a.6.6 0 0 0 .395.993l.865.082a1 1 0 0 0 .616-.143l.757-.462a1 1 0 0 1 .648-.139l2.704.346a1 1 0 0 1 .701.43l1.06 1.562a1 1 0 0 1 .145.326l.33 1.37a1 1 0 0 1-.065.657l-.298.639a.747.747 0 0 0 1.098.934l1.5-1.02.256 2.504a1 1 0 0 1-.207.718l-.713.91a1 1 0 0 1-.984.365l-1.158-.232a1 1 0 0 0-.84.216l-3.611 3.041a1 1 0 0 1-.615.235l-4.642.138-7.001-.67.298-4.916z"/></svg>`,
})
export class MidwestUs {
  protected readonly b = inject(GeoIconBase);
}
