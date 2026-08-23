// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-pa-guna-yala',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M22.463 15.419a.6.6 0 0 1 .09.738l-.58.953a.6.6 0 0 1-.964.083l-3.283-3.764a11 11 0 0 0-2.168-1.91l-1.446-.969a11 11 0 0 0-3.41-1.521l-.384-.098a11 11 0 0 0-4.952-.109l-.572.12-2.754.277a.656.656 0 0 1-.476-1.165L3.58 6.438a1 1 0 0 1 .708-.216l4.064.335a13 13 0 0 1 3.872.932l1.779.73a11 11 0 0 1 3.549 2.35z"/></svg>`,
})
export class PaGunaYala {
  protected readonly b = inject(GeoIconBase);
}
