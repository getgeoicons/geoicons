// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt-retalhuleu',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.526 3.667a.625.625 0 0 0-.93-.792L18.739 5.06a.6.6 0 0 1-.96-.407l-.199-1.694a.6.6 0 0 0-.988-.385l-.745.644a3 3 0 0 0-.568.656L13.843 6.12a2 2 0 0 0-.244.552l-.547 2.01a1 1 0 0 1-1.273.689L5.238 7.256a.6.6 0 0 0-.533.082l-2.86 2.045a.6.6 0 0 0-.028.956l7.136 5.728 3.728 3.32a8 8 0 0 0 1.768 1.194l2.645 1.31a.6.6 0 0 0 .81-.285l.976-2.1a2 2 0 0 0 .184-.904l-.045-1.484a2 2 0 0 1 .094-.67l1.06-3.318c.108-.337.155-.69.14-1.044l-.15-3.43A2 2 0 0 1 20.4 7.62z"/></svg>`,
})
export class GtRetalhuleu {
  protected readonly b = inject(GeoIconBase);
}
