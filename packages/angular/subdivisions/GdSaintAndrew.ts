// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gd-saint-andrew',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M8.146 3.465a2 2 0 0 0-.782.984L5.402 9.793a.6.6 0 0 1-.369.361l-.781.268a.6.6 0 0 0-.39.427l-.598 2.489a1 1 0 0 0-.023.338l.573 5.491a.6.6 0 0 0 .733.523l2.885-.67a.6.6 0 0 1 .473.089l5.104 3.471a1 1 0 0 0 .417.162l1.175.173a1 1 0 0 0 .823-.254l.776-.715a1 1 0 0 0 .32-.677l.075-1.282a1 1 0 0 1 .484-.8l.284-.17a1 1 0 0 0 .427-1.198l-1.284-3.553a2 2 0 0 1-.022-1.296l.336-1.04a1 1 0 0 1 1.025-.69l1.896.14a.842.842 0 0 0 .51-1.554l-.364-.228a1 1 0 0 1-.468-.877l.055-1.87q.018-.572.127-1.133l.699-3.58a.6.6 0 0 0-.468-.702l-1.75-.359a1 1 0 0 0-.583.056l-2.048.847a1 1 0 0 1-.574.057l-3.107-.606a1 1 0 0 0-.74.145z"/></svg>`,
})
export class GdSaintAndrew {
  protected readonly b = inject(GeoIconBase);
}
