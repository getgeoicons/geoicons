// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-gt-jalapa',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M5.74 10.433a3 3 0 0 0-1.903 1.177l-1.302 1.77a3 3 0 0 0-.464.937l-.738 2.526a.6.6 0 0 0 .28.69l1.16.657a1 1 0 0 0 .63.12l3.026-.417a1 1 0 0 1 .72.18l1.89 1.36a1 1 0 0 0 .948.12l2.32-.906a1 1 0 0 1 .879.074l1.223.734a.6.6 0 0 0 .81-.184l1.176-1.786a1 1 0 0 1 1.041-.428l2.945.62a1 1 0 0 0 1.185-.772l1.178-5.596a1 1 0 0 0-.03-.522l-.548-1.646a1 1 0 0 0-1.097-.673l-1.263.19a1 1 0 0 1-.962-.407L16.43 4.875a1 1 0 0 0-1.168-.353l-.9.342a2 2 0 0 0-1.14 1.108l-.063.155a.8.8 0 0 1-.852.487l-.77-.108a.8.8 0 0 0-.8.383l-1.54 2.59a1 1 0 0 1-.688.473z"/></svg>`,
})
export class GtJalapa {
  protected readonly b = inject(GeoIconBase);
}
