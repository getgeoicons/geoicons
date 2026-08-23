// SPDX-License-Identifier: GPL-3.0-only
// Commercial license available at https://geoicons.io
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { GeoIconBase } from '@geoicons/angular';

@Component({
  selector: 'geoicon-lc-choiseul',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
  hostDirectives: [
    {
      directive: GeoIconBase,
      inputs: ['size', 'strokeWidth', 'stroke', 'fill', 'aria-label'],
    },
  ],
  template: `<svg viewBox="0 0 24 24" [attr.width]="b.size" [attr.height]="b.size" [attr.stroke]="b.stroke" [attr.stroke-width]="b.strokeWidth" [attr.fill]="b.fill" [attr.role]="b.ariaLabel ? 'img' : null" [attr.aria-labelledby]="b.ariaLabel ? b.titleId : null" [attr.aria-hidden]="b.ariaLabel ? null : 'true'"><title *ngIf="b.ariaLabel" [id]="b.titleId">{{ b.ariaLabel }}</title><path stroke-linejoin="round" d="M20.355 2.263a.57.57 0 0 0-.905-.663l-5.702 5.393a2 2 0 0 1-1.11.53l-2.94.39a1 1 0 0 0-.66.383l-.86 1.12a2 2 0 0 1-.9.662l-1.24.454a2 2 0 0 0-.882.639l-1.153 1.46a2 2 0 0 0-.425 1.1l-.024.348a2 2 0 0 0 .802 1.744l2.106 1.566a3 3 0 0 1 .942 1.17l.539 1.19a3 3 0 0 0 .698.967l1.787 1.65a.6.6 0 0 0 .874-.064l1.354-1.674a2 2 0 0 0 .4-.839l.89-4.152q.051-.235.156-.452z"/></svg>`,
})
export class LcChoiseul {
  protected readonly b = inject(GeoIconBase);
}
