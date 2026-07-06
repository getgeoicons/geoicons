// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-maghreb',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="m6.732 13.555.463 4.754-3.336.32a1 1 0 0 1-.357-.03l-1.305-.354a1 1 0 0 1-.696-1.257l.148-.485a1 1 0 0 0 .022-.5l-.244-1.144a1 1 0 0 1 .117-.717l1.703-2.887a1 1 0 0 1 .288-.312l1.334-.932a1 1 0 0 0 .406-.614l.211-1.004a1 1 0 0 1 .245-.473l1.154-1.249A1 1 0 0 1 7.932 6.4l.9.295a1 1 0 0 0 .838-.1l1.233-.763a1 1 0 0 1 .452-.147l4.45-.331-.402 1.404a1 1 0 0 0 .333 1.052l.131.106a1 1 0 0 0 .244.146l2.842 1.184a.835.835 0 0 0 1.126-.548.84.84 0 0 1 .585-.583l.167-.046a1 1 0 0 1 .657.046l.522.223a1 1 0 0 1 .606.888l.184 5.893-.495.874-3.79-2.215-1.079.554-1.34-.7-2.655 2.086a1 1 0 0 1-.456.2l-.878.144a1 1 0 0 1-.828-.241l-3.263-2.917a.773.773 0 0 0-1.284.651Z"/></svg>`,
})
export class Maghreb {
  protected readonly b = inject(GeoIconBase);
}
